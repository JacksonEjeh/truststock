import React from 'react'

export default function Investment_opp() {
  return (
    <div>
        <div className="border-b-2 pb-5 mb-5">
            <div className="flex items-center gap-10 mb-1">
            <div>
                <p className="font-semibold text-sm mb-2">Type</p>
                <p className="font-semibold text-sm mb-2">ID</p>
                <p className="font-semibold text-sm mb-2">Country</p>
                <p className="font-semibold text-sm mb-2">Interest</p>
                <p className="font-semibold text-sm mb-2">Remaining</p>
                <p className="font-semibold text-sm mb-2">Available</p>
            </div>
            <div>
                <p className="mb-2 text-sm">business</p>
                <p className="mb-2 text-sm text-blue-500">LVX0000KOK11</p>
                <p className="mb-2 text-sm">U.S.A</p>
                <p className="mb-2 text-sm">12.5%</p>
                <p className="mb-2 text-sm">8m 13d</p>
                <p className="mb-2 text-sm">£25 758.15</p>
            </div>
            </div>
            <div>
            <button className="text-xs bg-purple-800 w-full rounded-full py-2 text-white">Invest</button>
            </div>
        </div>
    </div>
  )
}
