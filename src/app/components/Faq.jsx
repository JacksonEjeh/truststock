import React from 'react'

export default function Faq() {
  return (
    <div>
        <div className="bg-gray-100 p-5 mb-10">
            <h1 className="font-bold text-[25px] leading-tight mb-5">Frequently asked questions</h1>
            <div>
                <div className="collapse collapse-plus rounded-none border-b-2">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-sm font-medium">How is Truststock regulated</div>
                <div className="collapse-content">
                    <p className="text-sm font-light">Truststock is an investment brokerage firm licensed by World Bank Group. License number 27-55/2023//3.</p>
                </div>
                </div>
                <div className="collapse collapse-plus rounded-none border-b-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-sm font-medium">What is an IBF license?</div>
                <div className="collapse-content">
                    <p className="text-sm font-light">An Investment Brokerage Firm (IBF) license is a type of license that allows a company to operate as a broker-dealer in the securities industry. This license is issued by a regulatory authority; in Truststock's case, the license is issued by World Bank. To obtain an IBF license, a company must meet certain requirements and undergo a rigorous application process. The license also comes with a Series of rules and regulations to which the company must adhere in order to maintain its license and operate in a compliant manner.</p>
                </div>
                </div>
                <div className="collapse collapse-plus rounded-none border-b-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-sm font-medium">How to create an investor account</div>
                <div className="collapse-content">
                    <p className="text-sm mb-2 font-light">To begin your investment journey with Truststock, you need to meet the following criteria:</p>
                    <ul className="px-4 font-light mb-2">
                    <li className="list-disc text-sm">Be 18 years or older</li>
                    <li className="list-disc text-sm">Possess a valid passport or ID card</li>
                    <li className="list-disc text-sm">Understand the risk associated with investing</li>
                    </ul>
                    <p className="text-sm mb-2 font-light">The registration process is simple and consists of three steps</p>
                    <ul className="px-4 font-light mb-2">
                    <li className="list-disc text-sm">Confirm your email address</li>
                    <li className="list-disc text-sm">Verify your identity and provide information about yourself (KYC form)</li>
                    <li className="list-disc text-sm">Complete the suitability & Appropriateness assessment</li>
                    </ul>
                </div>
                </div>
                <div className="collapse collapse-plus rounded-none mb-">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-sm font-medium">What fees are applicable?</div>
                <div className="collapse-content">
                    <p className="text-sm font-light">Investing on Truststock is free of charge. For more information, please refer to the price list page.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
