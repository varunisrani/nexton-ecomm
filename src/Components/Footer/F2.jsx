import Image from "next/image";
import React from "react";

export default function F2() {
  return (
    <div className="flex flex-row justify-between mt-9 phone:flex phone:flex-col phone:ml-12 phone:mb-5">
      <span className="text-[1rem] phone:mb-4">Nexton eCommerce. © 2024</span>

      <Image
        src="https://i.ibb.co/TTpgFTx/payment-icons.png"
        height={200}
        width={200}
        alt=""
      />
    </div>
  );
}
