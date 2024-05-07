import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mx-8 mt-5 phone:hidden mid:hidden">
      <Image
        src="https://i.ibb.co/ZTM1pJF/logo.png"
        height={80}
        width={120}
        alt=""
      />
      <div className="h-[3.5rem] w-[24rem] bg-gray rounded-full mt-2 flex ">
        <input
          className="text-[1.1rem] bg-gray ml-10 text-btext focus:outline-none"
          placeholder="Search in products..."
        />
      </div>
      <h1 className="text-xl">Icons</h1>
    </div>
  );
}
