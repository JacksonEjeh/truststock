import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

export default function Footer() {
  return (
    <>
      <div className="mb-10">
        <h1 className="font-bold text-lg flex items-end mb-2">TRUSTSTOCK<span className="text-purple-800 "><GoDotFill className="text-sm" /></span></h1>
        <p className="text-sm mb-2">A licensed European investment platform.</p>
        <p className="text-sm">Investing in financial instruments involves risk. There is no guarantee to get back the invested amount. You could lose some or all of your investments.</p>
        <p className="text-sm text-gray-500 mt-5">About</p>
      </div>
      <footer className="px-5">
        <div className="grid grid-cols-2 pb-5 border-b-2 mb-5">
          <div>
            <h1 className="text-sm font-semibold mb-2">Invest</h1>
            <p className="text-black/50 text-sm font-light mb-1">How to start</p>
            <p className="text-black/50 text-sm font-light mb-1">How it works</p>
            <p className="text-black/50 text-sm font-light mb-1">Statistics</p>
            <p className="text-black/50 text-sm font-light mb-1">Lending companies</p>
            <p className="text-black/50 text-sm font-light mb-1">Investment risks</p>
          </div>
          <div>
            <div className="mb-5">
              <h1 className="text-sm font-semibold mb-2">Help</h1>
              <p className="text-black/50 text-sm font-light mb-1">FAQ</p>
              <p className="text-black/50 text-sm font-light mb-1">Support@truststock.eu</p>
            </div>
            <div>
              <h1 className="text-sm font-semibold mb-2">Follow us</h1>
              <div className="flex gap-1 text-2xl text-gray-300 items-center">
                <IoLogoLinkedin />
                <AiFillInstagram />
                <MdFacebook />
                <FaTelegram />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-sm font-semibold my-2">Legal</h1>
            <p className="text-black/50 text-sm font-light mb-1">Privacy policy</p>
            <p className="text-black/50 text-sm font-light mb-1">Terms & conditions</p>
            <p className="text-black/50 text-sm font-light mb-1">Investor protection</p>
            <p className="text-black/50 text-sm font-light mb-1">Legal documents</p>
          </div>
        </div>
        <div className="pb-5">
          <p className="text-[10px] leading-tight text-black/50 mb-5">SIA Truststock (registration tr. 40203016025; legal address: Sorrento, Florida(FL), 32776) is an investment brokerage firm licensed by World Bank (address: Washington, D.C., United States). License number. 27-5520233.</p>
          <p className="text-[10px] leading-tight text-black/50 mb-5">Truststock is a member of the national investor compensation scheme established under EU Directive 97/9/EC. The scheme protects investors by providing compensation if Truststock fails to return financial instruments or cash to investors. The maximum compensation an investor can claim under the scheme is 90% of their net loss, up to a maximum of €20 000.</p>
          <p className="text-[10px] text-black/50">&copy; 2025 Truststock. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
