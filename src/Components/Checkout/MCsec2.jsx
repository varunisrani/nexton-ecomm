import Image from "next/image";
import ProductM from "./ProductM";

export default function MCsec2() {
  return (
    <div className="mmain">
      <h1 className="text-[1.4rem] font-semibold mt-5">Order summary</h1>
      <div className="mt-5 flex flex-col gap-3">
        <ProductM />
        <ProductM />
      </div>
    </div>
  );
}
