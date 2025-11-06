'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionHistory } from '@/app/redux/slices/walletSlice';
import { TbArrowDownToArc } from "react-icons/tb";
import { TbArrowDownFromArc } from "react-icons/tb";
import PaymentReceipt from '@/app/components/dashboardComponents/PaymentReceipt';
import FadeInSection from '@/app/components/FadeInSection';


export default function AdminTransactions() {
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
      date: new Date(txn?.createdAt).toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        }),
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
            const date = new Date(txn.createdAt).toLocaleString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric',
            });
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
                : 'Approved';

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
                className="cursor-pointer border rounded-lg py-2 items-center px-2 flex bg-white justify-between mb-2 hover:bg-gray-50"
              >
                <div className='flex items-center gap-3'>
                    <div>
                        <div className='size-10 rounded-full bg-[#f2f2f2] flex items-center justify-center'>
                            {
                            txn.type === 'deposit' ? <TbArrowDownToArc className={statusColor} /> : <TbArrowDownFromArc className={statusColor} /> 
                            }
                        </div>
                    </div>
                    <div>
                        <p className='text-sm'>Michael Johnson</p>
                        <p className="text-xs font-light">Account {txn.type}</p>
                        <p className={`${statusColor} text-xs font-light`}>{statusLabel}</p>
                    </div>
                </div>
                <div className='text-left '>
                    <p className={`${amountColor} text-sm font-light`}>
                        {sign} ${Number(txn?.amount).toFixed(2)}
                    </p>
                    <p className="font-light text-xs">{date}</p>
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
