'use client'
import { PiCirclesFourFill } from "react-icons/pi";
import React, { useState } from 'react'

const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "text-teal-500";
    case "pending":
      return "text-yellow-500";
    case "inactive":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

const table_heads = ['', 'Full Name', 'email', 'Available Funds', 'Invested Funds', 'Active investment', '']
const table_body = [
  { name: 'Emmanuel Okoro', email: 'emmyokoro@example.co', available_funds: '$1,204.50', invested_funds: '$650', active_investment: '4' },
  { name: 'Sarah Johnson', email: 'sarahj@example.co', available_funds: '$980.00', invested_funds: '$420', active_investment: '2' },
  { name: 'Michael Adeyemi', email: 'mikeyemi@example.co', available_funds: '$2,350.10', invested_funds: '$1,100', active_investment: '6' },
  { name: 'Linda Uche', email: 'lindau@example.co', available_funds: '$760.75', invested_funds: '$300', active_investment: '3' },
  { name: 'David Smith', email: 'davidsmith@example.co', available_funds: '$1,500.00', invested_funds: '$700', active_investment: '5' },
  { name: 'Chidinma Eze', email: 'chidinmaeze@example.co', available_funds: '$875.40', invested_funds: '$250', active_investment: '2' },
  { name: 'John Musa', email: 'johnmusa@example.co', available_funds: '$1,130.90', invested_funds: '$500', active_investment: '4' },
  { name: 'Grace Daniels', email: 'graced@example.co', available_funds: '$690.25', invested_funds: '$200', active_investment: '1' },
  { name: 'Henry Afolabi', email: 'henryaf@example.co', available_funds: '$3,420.70', invested_funds: '$2,000', active_investment: '8' },
  { name: 'Mary Ann', email: 'maryann@example.co', available_funds: '$540.60', invested_funds: '$180', active_investment: '2' },
  { name: 'Daniel Brown', email: 'danbrown@example.co', available_funds: '$1,890.00', invested_funds: '$950', active_investment: '5' }
]


export default function UserInfoTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const totalPages = Math.ceil(table_body?.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = table_body?.slice(startIndex, startIndex + rowsPerPage);


  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden "  style={{boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)'}}>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs border-collapse">
          <thead className="bg-gray-50 font-semibold uppercase text-xs text-black/60">
            <tr>
              { table_heads?.map((head, i) => (
                <th key={i} className='md:py-4 md:px-5 py-3 px-4 whitespace-nowrap'>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-black/60">
            {currentRows?.map((item, index) => {
              return(
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white text-center" : "bg-gray-50 text-center"}
                >
                  <td className={`md:py-4 md:px-5 py-3 px-3 whitespace-nowrap`}>
                    <PiCirclesFourFill className="text-xs" color={"currentColor"}/>
                  </td>
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.name}</td> 
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.email}</td> 
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.available_funds}</td> 
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.invested_funds}</td> 
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.active_investment}</td> 
                  
                  <td className={`md:py-4 md:px-5 py-3 px-4 whitespace-nowrap text-[#00A79E]`}>View</td> 
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 text-xs text-gray-600 flex-wrap">
        <span className="mb-2 md:mb-0">
          Showing <strong>{startIndex + 1}</strong> to <strong>{Math.min(startIndex + rowsPerPage, table_body?.length)}</strong> of <strong>{table_body?.length}</strong> results
        </span>
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 rounded hover:bg-gray-200"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`w-5 h-6 rounded text-xs ${
                currentPage === i + 1
                  ? "bg-teal-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-2 py-1 rounded hover:bg-gray-200"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
