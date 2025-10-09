'use client'
import { useRef, useEffect } from "react";
import { ArrowRight, ArrowLeft, } from "lucide-react";
import { FaMoneyBills } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { PiRadioactiveFill } from "react-icons/pi";


export default function AdminCardSwiper() {
    let containerRef = useRef();
    let leftBtnRef = useRef();
    let rightBtnRef = useRef();

    function scrollLeftt() {
        containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }

    function scrollRight() {
        containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }

    useEffect(() => {
        const container = containerRef.current;
        const leftBtn = leftBtnRef.current;
        const rightBtn = rightBtnRef.current;

        function updateButtons() {
        const scrollLeft = container.scrollLeft;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (scrollLeft <= 0) {
            leftBtn.classList.add("hidden");
        } else {
            leftBtn.classList.remove("hidden");
        }

        if (scrollLeft >= maxScrollLeft - 1) {
            rightBtn.classList.add("hidden");
        } else {
            rightBtn.classList.remove("hidden");
        }
        }

        container.addEventListener("scroll", updateButtons);
        window.addEventListener("load", updateButtons);

        return () => {
        container.removeEventListener("scroll", updateButtons);
        window.removeEventListener("load", updateButtons);
        };
    }, []);

  return (
    <div className="relative w-full">
      <button
        id="scrollLeftBtn"
        ref={leftBtnRef}
        onClick={scrollLeftt}
        className="absolute left-0 top-1/2 h-[25px] w-[25px] items-center justify-center -translate-y-1/2 bg-white text-white rounded-full shadow-navbar z-5 hidden"
      >
        <ArrowLeft size={15} color="#5e5b5b" />
      </button>

      <div
        id="scrollContainer"
        ref={containerRef}
        className="flex gap-4 overflow-x-auto w-full pb-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
        // style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
      >
            <div className='border border-yellow-500 bg-yellow-500/10 py-4 px-6 rounded-lg text-center'>
                <div className="flex items-center gap-2 text-center justify-center">
                    <div className="flex items-center gap-2">
                        <FaMoneyBills className="text-sm" />
                        <h4 className="text-sm">$430,000</h4>
                    </div>
                </div>
                <p className='text-xs text-black/50 mt-1'>Total&nbsp;Revenue</p>
            </div>
            <div className='border border-yellow-500 bg-yellow-500/10 py-4 px-6 rounded-lg text-center'>
                <div className="flex items-center gap-2 text-center justify-center">
                    <div className="flex items-center gap-2">
                        <FaUsers className="text-[15px]" />
                        <h4 className="text-sm">302</h4>
                    </div>
                </div>
                <p className='text-xs text-black/50 mt-1'>Total&nbsp;Users</p>
            </div>
            <div className='border border-green-500 bg-green-500/10 p-4 rounded-lg text-center'>
                <div className="flex items-center gap-2 text-center justify-center">
                    <div className="flex items-center gap-2">
                        <PiRadioactiveFill className="text-[15px]" />
                        <h4 className="text-center text-sm">15</h4>
                    </div>
                </div>
                <p className='text-xs text-black/50 mt-1'>Active&nbsp;Investments</p>
            </div>
            <div className='border border-yellow-500 bg-yellow-500/10 p-4 rounded-lg text-center'>
                <h4>60%</h4>
                <p className='text-xs text-black/50 mt-1'>Current&nbsp;Test&nbsp;Score</p>
            </div>
            <div className='border border-black bg-white p-4 rounded-lg text-center'>
                <h4>Weekly</h4>
                <p className='text-xs text-black/50 mt-1'>Current&nbsp;Test&nbsp;Score</p>
            </div>
      </div>

      <button
        id="scrollRightBtn"
        onClick={scrollRight}
        ref={rightBtnRef}
        className="absolute right-0 top-1/2 h-[25px] w-[25px] flex items-center justify-center -translate-y-1/2 bg-white text-white rounded-full shadow-navbar z-5"
      >
        <ArrowRight size={15} color="#5e5b5b" />
      </button>
    </div>
  );
}