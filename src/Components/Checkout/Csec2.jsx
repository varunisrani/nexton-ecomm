import React from "react";
import Product from "./Product";

export default function Csec2() {
  return (
    <div className="flex flex-col  ml-[15rem] mad4:ml-[8rem] mad3:ml-[1.2rem] mad2:ml-[2rem] mad1:ml-[2rem] mad6:ml-[2rem] mt-[3rem]">
      <h1 className="text-2xl font-semibold">Order summary</h1>
      <div className="border border-[#475569] w-[40rem] h-0 mt-[1rem]"></div>
      <Product />
      <div className="border border-[#475569] w-[40rem] h-0 mt-[2rem]"></div>
      <Product />
      <div className="border border-[#475569] w-[40rem] h-0 mt-[2rem]"></div>
      <div className="flex flex-row mt-5">
        <h1 className="text-[1.1rem] text-black/60">Subtotal</h1>
        <h1 className="text-[1.1rem] text-black/60 ml-[31rem]">$169.99</h1>
      </div>
      <div className="flex flex-row mt-2">
        <h1 className="text-[1.1rem] text-black/60">Shipping estimate</h1>
        <h1 className="text-[1.1rem] text-black/60 ml-[26rem]">$5.00</h1>
      </div>
      <div className="flex flex-row mt-2">
        <h1 className="text-[1.1rem] text-black/60">Tax estimate</h1>
        <h1 className="text-[1.1rem] text-black/60 ml-[28.7rem]">$24.90</h1>
      </div>
      <div className="flex flex-row mt-5">
        <h1 className="text-[1.1rem] text-black font-semibold">Order total</h1>
        <h1 className="text-[1.1rem] text-black/60 ml-[29.55rem]">$199.89</h1>
      </div>
      <button className="w-[40rem] h-[3.4rem] bg-black text-[1.1rem] text-white rounded-full font-medium mt-9 shadow-xl">
        Continue
      </button>
    </div>
  );
}
