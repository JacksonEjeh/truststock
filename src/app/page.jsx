import { MdArrowCircleRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GrSecure } from "react-icons/gr";
import { TbLicense } from "react-icons/tb";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import Link from "next/link";
import Footer from "./components/footer";
import Nav from "./components/Nav";
import CreateAccountBtn from "./components/globalComponent/CreateAccount-Btn";
import Investment_opp from "./components/globalComponent/Investment_opp";
import Faq from "./components/Faq";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <div className="h-screen bg-black relative">
      <Nav />
      <div className="bg-white rounded-t-3xl border-t-2 border-purple-800 fixed left-0 right-0 bottom-0 top-[55px]">
        <div className="h-full overflow-y-scroll pt-6 px-5">
          <div>
            <div className="rounded-xl p-4 bg-purple-800 mb-10">
              <div className="mb-2">
                <div>
                  <h1 className="text-white font-bold text-2xl mb-1">Invest in Loans and Buy Stocks at Incredibly Low Fees!</h1>
                  {/* <p className="text-xs text-white/80">Invest in stock around the world and find out why over 3 million investors choose our award-winning investment platform</p> */}
                </div>
                <div className="flex justify-center items-center my-5">
                  <img src="/images/bg-image.png" alt="" className="size-[70%]" />
                </div>
              </div>
              <div className="text-white">
                <p className="font-semibold text-sm">Invest in stock around the world and find out why over 3 million investors choose our award-winning investment platform</p>
              </div>
            </div>
            <CreateAccountBtn />
          </div>
          <FadeInSection>
          <div className="mb-10">
            <h1 className="font-bold text-[22px] leading-tight mb-5">Maximize the potential of your money, minimize your efforts</h1>
            <FadeInSection>
            <div className="bg-gray-100 rounded-lg p-3 mb-5">
              <h1 className="text-xl font-bold mb-1">Stocks*</h1>
              <p className="">Invest in fractions of your favorite companies without buying a full share.</p>
              <img src="/images/stock.png" alt="" />
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="bg-gray-100 rounded-lg p-3 mb-5">
              <h1 className="text-xl font-bold mb-1">Loans*</h1>
              <p className="">Invest in thousands of loans and start earning interest!.</p>
              <img src="/images/loan.png" alt="" />
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="bg-gray-100 rounded-lg p-3 mb-5">
              <h1 className="text-xl font-bold mb-1">Precious Metals*</h1>
              <p className="">Diversify your portfolio by investing in physically-backed precious metals.</p>
              <img src="/images/metal.png" alt="" />
            </div>
            </FadeInSection>
            <FadeInSection>
            <Link href={'/sign-up'} className="flex items-center justify-center mb-5">
              <button className="bg-black text-white flex items-center rounded-full px-2 py-2">
                <span className="px-5 text-sm">Become an investor</span>
                <MdArrowCircleRight className="text-3xl" />
              </button>
            </Link>
            </FadeInSection>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="bg-purple-800 px-4 py-6 text-white mb-10">
            <h1 className="font-bold text-xl w-32 mb-10">Licensed,&nbsp;Profitable and&nbsp;Credible</h1>
            <FadeInSection>
            <div className="mb-5">
              <div className="">
                <div className="size-7 rounded-full bg-white/40 flex items-center justify-center text-purple-800"><TbLicense className="size-[70%]" /></div>
                <h1 className="font-semibold text-lg mb-1">Licensed</h1>
              </div>
              <p className="text-sm text-white/80">IBF License Tr. 27-55/2023/3 provides assurance to investors that the platform is operating legally and in compliance with EU regulations.</p>
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="mb-5">
              <div>
                <div className="size-7 rounded-full bg-white/40 flex items-center justify-center text-purple-800"><HiOutlineCubeTransparent className="size-[70%]" /></div>
                <h1 className="font-semibold text-lg mb-1">Transparent</h1>
              </div>
              <p className="text-sm text-white/80">Truststock is regulated by World Bank Group Washington D.C, the competent authority for investment and loan services supervision.</p>
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="mb-5">
              <div>
                <div className="size-7 rounded-full bg-white/40 flex items-center justify-center text-purple-800"><GrSecure className="size-[70%]" /></div>
                <h1 className="font-semibold text-lg mb-1">Secure</h1>
              </div>
              <p className="text-sm text-white/80">In accordance with European Directive 97/9/EC, all retail investors on Truststock are considered members of the investment protection scheme.</p>
            </div>
            </FadeInSection>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="mb-10">
            <h1 className="font-bold text-[25px] leading-tight mb-5">Start investing simply and with confidence</h1>
            <FadeInSection>
            <div className="flex gap-2 mb-5">
              <div>
                <div className="bg-purple-100 size-7 rounded-full flex items-center justify-center text-xs">01</div>
              </div>
              <div>
                <h1 className="text-sm font-semibold">Create an account</h1>
                <p className="text-sm text-black/60">Creating a Truststock account takes no more than a couple of minutes</p>
              </div>
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="flex gap-2 mb-5">
              <div>
                <div className="bg-purple-100 size-7 rounded-full flex items-center justify-center text-xs">02</div>
              </div>
              <div>
                <h1 className="text-sm font-semibold">Verify your identity</h1>
                <p className="text-sm text-black/60">Complete identity verification to help us secure your account</p>
              </div>
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="flex gap-2 mb-5">
              <div>
                <div className="bg-purple-100 size-7 rounded-full flex items-center justify-center text-xs">03</div>
              </div>
              <div>
                <h1 className="text-sm font-semibold">Add funds</h1>
                <p className="text-sm text-black/60">Deposit funds from your personal or company bank account</p>
              </div>
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="flex gap-2 mb-5">
              <div>
                <div className="bg-purple-100 size-7 rounded-full flex items-center justify-center text-xs">03</div>
              </div>
              <div>
                <h1 className="text-sm font-semibold">Invest</h1>
                <p className="text-sm text-black/60">Invest in thousands of stocks, loans and start earning interest!</p>
              </div>
            </div>
            </FadeInSection>
            <FadeInSection>
            <Link href={'sign-up'} className="flex items-center justify-center mb-5">
              <button className="bg-black text-white flex items-center rounded-full px-2 py-2">
                <span className="px-5 text-sm">Start now</span>
                <MdArrowCircleRight className="text-3xl" />
              </button>
            </Link>
            </FadeInSection>
          </div>
          </FadeInSection>
          <FadeInSection>
          <div className="mb-10">
            <h1 className="font-bold text-[25px] leading-tight mb-10">Loan Investment Opportunities</h1>
            <FadeInSection>
            <Investment_opp />
            </FadeInSection>
            <FadeInSection>
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
            </FadeInSection>
            <FadeInSection>
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
            </FadeInSection>
            <FadeInSection>
            <Link href={'sign-up'} className="flex items-center justify-center mb-5">
              <button className="bg-black text-white flex items-center rounded-full px-2 py-2">
                <span className="px-5 text-sm">Start investing</span>
                <MdArrowCircleRight className="text-3xl" />
              </button>
            </Link>
            </FadeInSection>
          </div>
          </FadeInSection>
          <FadeInSection>
          <Faq />
          </FadeInSection>
          <FadeInSection>
          <Footer />
          </FadeInSection>
        </div>
      </div>
      {/* <div className="shadow bg-black/80 h-10 rounded-full fixed bottom-3 left-4 right-4"></div> */}
    </div>
  );
}
