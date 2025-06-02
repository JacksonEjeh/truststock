'use client';
import React, { useEffect, useState } from 'react';
import FadeInSection from '../FadeInSection';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionHistory } from '@/app/redux/slices/walletSlice';

export default function Transactions() {
  const { transaction_loader, transactions } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const [selectedTxn, setSelectedTxn] = useState(null);

  useEffect(() => {
    dispatch(getTransactionHistory());
  }, []);

  const openModal = (txn) => {
    setSelectedTxn(txn);
    document.getElementById('transaction_modal')?.showModal();
  };

  if(transaction_loader) return <div className='h-20 flex justify-center items-center'><div className="animate-spin rounded-full h-10 w-10 border-4 border-purple-800 border-t-transparent"></div></div>

  return (
    <div>
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
          <p className="text-gray-500">No transactions found.</p>
        )}
      </FadeInSection>

      {/* Modal */}
      <dialog id="transaction_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {selectedTxn && (
            <div className="space-y-2">
              <h3 className="font-bold text-lg">Transaction Details</h3>
              <p><strong>Type:</strong> {selectedTxn.type}</p>
              <p><strong>Status:</strong> {selectedTxn.status}</p>
              <p><strong>Method:</strong> {selectedTxn.method.toUpperCase()}</p>
              <p><strong>Reference:</strong> {selectedTxn.reference}</p>
              <p><strong>Amount:</strong> ${selectedTxn.amount.toFixed(2)}</p>
              <p><strong>Date:</strong> {new Date(selectedTxn.createdAt).toLocaleString()}</p>
              <p><strong>User ID:</strong> {selectedTxn.user}</p>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}
