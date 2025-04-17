import Footer from "../components/footer";
import CreateAccountBtn from "../components/globalComponent/CreateAccount-Btn";
import Nav from "../components/Nav";
import { RiErrorWarningFill } from "react-icons/ri";



export default function page() {
  return (
    <div className="h-screen bg-black relative">
        <Nav />
        <div className="bg-white rounded-t-3xl border-t-2 border-purple-800 fixed left-0 right-0 bottom-0 top-[55px]">
            <div className="h-full overflow-y-scroll pt-8 px-5">
                <div className="text-center my-12">
                    <h1 className="font-bold text-4xl mb-3">How it works</h1>
                    <p className="font-light">Retail investment democratization offers diverse options for both beginners and experienced investors.</p>
                </div>
                <div className="mb-10">
                    <p className="text-purple-800 text-sm font-light mb-1">Investing in loans, crypto assets, and stocks.</p>
                    <h1 className="text-2xl mb-5 leading-tight font-bold">Unlock the passive income tool by investing in assets on a licensed investment platform.</h1>
                    <p className="font-light mb-4">Truststock believes that democratizing investments is an opportunity for individuals of all income levels to achieve better returns on their savings and build long-term wealth.</p>
                    <p className="font-light">Your investments generate returns based on repayments borrowers make on their loans. By reinvesting your returns, earnings can grow intensely.</p>
                </div>
                <div className="p-4 bg-purple-500/20 rounded-lg flex gap-2">
                    <div>
                        <RiErrorWarningFill className="text-purple-500 text-3xl" />
                    </div>
                    <p className="font-light">As an investor, it's essential to understand the risks involved, even though we are a regulated platform with a license issued by the World Bank. Please be aware that your capital is subject to potential risks, carefully consider your objectives and potential risks before making any investment decisions.</p>
                </div>
                <div className="my-16">
                    <img src="/images/white_youtube_male_reading-min.89bcb6e.jpg" alt="" className="rounded-xl" />
                </div>
                <div>
                    <h1 className="text-2xl mb-5 leading-tight font-bold">Getting started with Truststock is easy and safe</h1>
                    <CreateAccountBtn how_it_works={true} />
                </div>
                <div className="p-8 bg-pink-500/20 rounded-lg mb-5">
                    <h1 className="font-bold text-lg">Create an account</h1>
                    <p className="font-light">Registration on our platform is free and your information is regulated by authorities, ensuring investor security.</p>
                </div>
                <div className="p-8 bg-green-500/20 rounded-lg mb-5">
                    <h1 className="font-bold text-lg">Add funds</h1>
                    <p className="font-light">Truststock accepts payments in Euro, and transfers can be made solely from your personal or company's bank account.</p>
                </div>
                <div className="p-8 bg-purple-500/20 rounded-lg mb-10">
                    <h1 className="font-bold text-lg">Invest</h1>
                    <p className="font-light">Select from our automated investing options or hand-pick specific investments. You can get started with as little as €50.</p>
                </div>
                <div className="mb-16">
                    <p className="text-purple-800 mb-5">Available investment methods</p>
                    <div className="mb-5">
                        <h1 className="font-bold text-lg">Manual</h1>
                        <p className="font-light">Manual investment allows for a more hands-on approach to your investments. You will hand-pick the loans you want to invest in, and may research and evaluate them on a case-by-case basis.</p>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold text-lg">Smart-Reinvest</h1>
                        <p className="font-light">The automatic reinvestment tool is designed to keep your money continuously working for you by automatically reinvesting principal returns in the case of early loan repayments.</p>
                    </div>
                    <div className="mb-5">
                        <h1 className="font-bold text-lg">Auto-invest</h1>
                        <p className="font-light">Auto-Invest is a convenient feature that enables investors to automate their investment process. By setting specific investment criteria, the platform will automatically invest their funds into Notes that match those criteria.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl mb-5 leading-tight font-bold text-center">Let's begin your investment journey with TrustStock today!</h1>
                    <CreateAccountBtn how_it_works={true} />
                </div>
                <Footer />
            </div>
        </div>
    </div>
  )
}
