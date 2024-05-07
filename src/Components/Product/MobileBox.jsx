import React from "react";

export default function MobileBox() {
  return (
    <div className="flex flex-col mad1:hidden mad2:hidden mad3:hidden mad4:hidden mad5:hidden mad6:hidden">
      <div className="flex flex-col ml-0 mt-5">
        <h1 className="text-xl font-medium">$68.00</h1>
        <h1 className="text-[0.8rem] font-medium text-black">
          $<span className="line-through">79.00</span>
        </h1>
        <h1 className="mt-5">142 reviews</h1>
      </div>
      <div className="flex flex-row gap-3 mt-5">
        <div className="h-[3rem] w-[5.5rem]   rounded-2xl bg-vib">
          <h1 className="text-center mt-[0.7rem] text-[1.1rem] font-semibold text-white">
            S
          </h1>
        </div>
        <div className="h-[3rem] w-[5.5rem] border border-black/50 rounded-2xl">
          <h1 className="text-center mt-[0.6rem] text-[1.1rem] font-semibold text-black">
            M
          </h1>
        </div>
        <div className="h-[3rem] w-[5.5rem] border border-black/50 rounded-2xl ">
          <h1 className="text-center mt-[0.6rem] text-[1.1rem] font-semibold text-black">
            L
          </h1>
        </div>
        <div className="h-[3rem] w-[5.5rem] border border-black/50 rounded-2xl ">
          <h1 className="text-center mt-[0.6rem] text-[1.1rem] font-semibold text-black">
            XL
          </h1>
        </div>
      </div>
      <div className="flex flex-row ml-0 mt-[3rem]">
        <div className="h-[3rem] w-[10rem] bg-[#F8F8F8] rounded-3xl flex flex-row text-xl font-bold">
          <div className="flex ml-3 gap-6">
            <h1 className="text-3xl mt-[0.3rem]">-</h1>
            <h1 className="mt-[0.6rem] font-medium">1</h1>
            <h1 className="mt-[0.2rem] text-3xl font-medium mr-2">+</h1>
          </div>
        </div>
        <button className="text-[1rem] w-[11rem] h-[3rem] bg-black text-white rounded-full font-medium ml-10">
          Add to cart
        </button>
      </div>
    </div>
  );
}
