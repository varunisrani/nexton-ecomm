import React from "react";

export default function MobileBox() {
  return (
    <div className="mbox">
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
        <div className="mboxtextdiv">
          <h1 className="mboxtext">M</h1>
        </div>
        <div className="mboxtextdiv ">
          <h1 className="mboxtext">L</h1>
        </div>
        <div className="mboxtextdiv ">
          <h1 className="mboxtext">XL</h1>
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
        <button className="mcartbutton">Add to cart</button>
      </div>
    </div>
  );
}
