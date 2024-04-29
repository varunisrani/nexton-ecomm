import Image from "next/image";
import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import F1 from "./F1";
import F2 from "./F2";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col">
        <F1 />
        <F2 />
      </div>
    </>
  );
}
