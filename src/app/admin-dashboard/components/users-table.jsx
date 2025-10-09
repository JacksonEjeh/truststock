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
    {test: 'Jackson Gabriel', scores: 'gabbyjax@example.co', retake: '$689.82', grade: '$240', question_attempted: '3'},
    {test: 'Jackson Gabriel', scores: 'gabbyjax@example.co', retake: '$689.82', grade: '$240', question_attempted: '3'},
    {test: 'Jackson Gabriel', scores: 'gabbyjax@example.co', retake: '$689.82', grade: '$240', question_attempted: '3'},
    {test: 'Jackson Gabriel', scores: 'gabbyjax@example.co', retake: '$689.82', grade: '$240', question_attempted: '3'},
    {test: 'Jackson Gabriel', scores: 'gabbyjax@example.co', retake: '$689.82', grade: '$240', question_attempted: '3'},
    {test: 'Jackson Gabriel', scores: 'gabbyjax@example.co', retake: '$689.82', grade: '$240', question_attempted: '3'},
    {test: 'Jackson Gabriel', scores: 'gabbyjax@example.co', retake: '$689.82', grade: '$240', question_attempted: '3'},
]

export default function UserInfoTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

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
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.test}</td> 
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.scores}</td> 
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.retake}</td> 
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.grade}</td> 
                  <td className="md:py-4 md:px-5 py-3 px-4 whitespace-nowrap">{item?.question_attempted}</td> 
                  
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
