'use client';
import React, { useEffect, useState } from 'react';
import FadeInSection from '../FadeInSection';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionHistory } from '@/app/redux/slices/walletSlice';
import PaymentReceipt from './PaymentReceipt';

export default function Transactions() {
  const { transaction_loader, transactions } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const [showComponent, setShowComponent] = useState(true);
  const [paymentReceipt, setPaymentReceipt] = useState({
    amount: null,
    date: null,
    method: null,
    reference: null,
    status: null,
    type: null,
    user: null,
    walletAddress: null,
  })

  useEffect(() => {
    dispatch(getTransactionHistory());
  }, []);

  const openModal = (txn) => {
    setShowComponent(true)
    setPaymentReceipt({
      amount: txn?.amount.toFixed(2),
      date: new Date(txn?.createdAt).toLocaleString(),
      method: txn?.method.toUpperCase(),
      reference: txn?.reference,
      status: txn?.status.toUpperCase(),
      type: txn?.type.toUpperCase(),
      user: txn?.user,
      walletAddress: txn?.walletAddress,
    })
    // document.getElementById('transaction_modal')?.showModal();
  };

  if(transaction_loader) return <div className='h-20 flex justify-center items-center'><div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-800 border-t-transparent"></div></div>

  return (
    <div>
      <div>
        {
          showComponent && 
          <PaymentReceipt 
            amount={paymentReceipt.amount}
            date={paymentReceipt.date}
            method={paymentReceipt.method}
            reference={paymentReceipt.reference}
            status={paymentReceipt.status}
            type={paymentReceipt.type}
            user={paymentReceipt.user}
            walletAddress={paymentReceipt.walletAddress}
            onClose={()=>setShowComponent(prev => !prev)}
          />
        }
      </div>
      <FadeInSection>
        {transactions?.transactions?.length > 0 ? (
          transactions.transactions.map((txn) => {
            const date = new Date(txn.createdAt).toLocaleString('en-GB').replace(',', '');
            const isDeposit = txn.type === 'deposit';
            const sign = isDeposit ? '+' : '-';
            const amountColor =
              txn.status === 'pending'
                ? 'text-yellow-500'
                : txn.status === 'rejected'
                ? 'text-red-500'
                : 'text-green-500';

            const statusLabel =
              txn.status === 'pending'
                ? 'Pending'
                : txn.status === 'rejected'
                ? 'Rejected'
                : 'Confirmed';

            const statusColor =
              txn.status === 'pending'
                ? 'text-yellow-500'
                : txn.status === 'rejected'
                ? 'text-red-500'
                : 'text-green-500';

            return (
              <div
                key={txn._id}
                onClick={() => openModal(txn)}
                className="cursor-pointer border rounded-lg p-3 flex items-center justify-between mb-2 hover:bg-gray-50"
              >
                <div>
                  <small className="font-light">{date}</small>
                  <p className="text-sm">Account {txn.type }</p>
                  <small className={statusColor}>{statusLabel}</small>
                </div>
                <div>
                  <p className={`${amountColor} text-sm`}>
                    {sign}${txn.amount.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-black h-28 flex items-center justify-center">No transactions found.</p>
        )}
      </FadeInSection>
    </div>
  );
}
