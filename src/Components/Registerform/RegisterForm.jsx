import { Input } from "postcss";
import React from "react";
import Input1 from "../Loginform/Input1";

export default function RegisterForm() {
  return (
    <main className="registerform">
      <h1 className="formtext">Register</h1>
      <div className="formmain">
        <Input1 label="Email" place="example@example.com" type="email" />
        <Input1 label="Password" type="password" />
        <Input1 label="Password (Again)" type="password" />
      </div>
      <button className="formbutton">Continue</button>
      <div className="flex flex-row mt-10 gap-5">
        <div className="orborder"></div>
        <h1 className="text-[1rem]">OR</h1>
        <div className="orborder"></div>
      </div>
      <div className="flex flex-row text-[1rem] gap-2 mt-10">
        <span>Already a member?</span>
        <span className="text-vib">Login</span>
      </div>
    </main>
  );
}
