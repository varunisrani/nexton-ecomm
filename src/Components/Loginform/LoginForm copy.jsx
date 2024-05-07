import { Input } from "postcss";
import React from "react";
import Input1 from "./Input1";

export default function LoginForm() {
  return (
    <main className="loginform">
      <h1 className="formtext">Login</h1>
      <div className="formmain">
        <Input1 label="Email" place="example@example.com" type="email" />
        <Input1 label="Password" place="Enter your passowrd" type="password" />
      </div>
      <button className="formbutton">Continue</button>
      <div className="flex flex-row mt-10 gap-5">
        <div className="orborder"></div>
        <h1 className="text-[1rem]">OR</h1>
        <div className="orborder"></div>
      </div>
      <div className="flex flex-row text-[1rem] phone:text-[0.9rem] gap-2 mt-10">
        <span>New user?</span>
        <span className="text-vib">Create an account</span>
      </div>
    </main>
  );
}
