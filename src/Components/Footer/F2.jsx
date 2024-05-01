import Image from "next/image";
import React from "react";

export default function F2() {
  return (
    <div className="flex flex-row justify-between mt-9">
      <span className="text-[1rem]">Nexton eCommerce. © 2024</span>

      <Image
        src="https://i.ibb.co/TTpgFTx/payment-icons.png"
        height={200}
        width={200}
        alt=""
      />
    </div>
  );
}
