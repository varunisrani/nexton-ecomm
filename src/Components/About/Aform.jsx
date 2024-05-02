import React from "react";

export default function Aform() {
  return (
    <div className="flex flex-row mt-[10rem]">
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl">Get in touch with us</h1>
        <div className="flex flex-row">
          <div className="flex flex-col mt-10">
            <h1 className="text-xl font-semibold">Address</h1>
            <h1>
              Photo booth tattooed prism, portland taiyaki hoodie neutra
              typewriter
            </h1>
          </div>
        </div>
        <div className="flex flex-row mt-5">
          <div className="flex flex-col mt-7">
            <h1 className="text-xl font-semibold">Email</h1>
            <h1>nexton@example.com</h1>
          </div>
        </div>
        <div className="flex flex-row mt-5">
          <div className="flex flex-col mt-7">
            <h1 className="text-xl font-semibold">Phone</h1>
            <h1>000-123-456-7890</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col mad4:ml-[30rem] mad3:ml-[30rem]">
        <div className="flex flex-col mt-5 ml-[30rem] mad4:ml-[0rem] mad3:ml-[0rem]">
          <h1 className="text-xl font-semibold">Full name</h1>
          <div className="w-[40rem] h-[3rem] border border-[#E5E7EB] rounded-xl mt-2">
            <input className="ml-2 mt-2 focus:outline-none" />
          </div>
        </div>
        <div className="flex flex-col mt-5 ml-[52.5rem] mad4:ml-[0rem] mad3:ml-[0rem]">
          <h1 className="text-xl font-semibold">Email address</h1>
          <div className="w-[40rem] h-[3rem] border border-[#E5E7EB] rounded-xl mt-2">
            {" "}
            <input className="ml-2 mt-2 focus:outline-none" />
          </div>
        </div>
        <div className="flex flex-col mt-5 ml-[53.6rem] mad4:ml-[0rem] mad3:ml-[0rem]">
          <h1 className="text-xl font-semibold">Message</h1>
          <div className="w-[40rem] h-[10rem] border border-[#E5E7EB] rounded-xl mt-2">
            <input className="ml-5 mt-3 w-[38rem] h-[8rem] focus:outline-none" />
          </div>
          <button className="w-[14rem] h-[3.4rem] bg-black text-[1rem] text-white rounded-full font-medium mt-9 shadow-2xl">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
