import { Input } from "postcss";
import React from "react";
import Input1 from "./Input1";

export default function LoginForm() {
  return (
    <main className="flex flex-col justify-center items-center mt-[3rem] ">
      <h1 className="text-[2.5rem] font-medium mad4:text-[2.2rem] mad3:text-[2.2rem] mad2:text-[2.2rem]">
        Login
      </h1>
      <div className="mt-[4rem] mad4:mt-[2rem] mad3:mt-[2rem] mad2:mt-[2rem] flex flex-col gap-9">
        <Input1 label="Email" place="example@example.com" type="email" />
        <Input1 label="Password" place="Enter your passowrd" type="password" />
      </div>
      <button className="w-[28rem] h-[3.4rem] bg-black text-[1rem] text-white rounded-full font-medium mt-9 shadow-xl">
        Continue
      </button>
      <div className="flex flex-row mt-10 gap-5">
        <div className="border border-b-[#F3F4F6] w-[12rem] h-0 mt-[0.4rem]"></div>
        <h1 className="text-[1rem]">OR</h1>
        <div className="border border-b-[#F3F4F6] w-[12rem] h-0 mt-[0.4rem]"></div>
      </div>
      <div className="flex flex-row text-[1rem] gap-2 mt-10">
        <span>New user?</span>
        <span className="text-vib">Create an account</span>
      </div>
    </main>
  );
}
