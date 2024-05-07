import Image from "next/image";

export default function ProductM() {
  return (
    <div className="flex flex-row mt-5 justify-between">
      <Image
        src="https://i.ibb.co/4gGzqdK/image.png"
        height={120}
        width={120}
        alt=""
      />
      <div className="flex flex-col ml-3 mt-2">
        <h1 className="text-[1.1rem] font-semibold">Black Automatic Watch</h1>
        <div className="flex flex-row">
          <div className="flex flex-col ml-0 mt-5">
            <h1 className="text-xl font-medium">$68.00</h1>
            <h1 className="text-[0.8rem] font-medium text-black">
              $<span className="line-through">79.00</span>
            </h1>
          </div>
          <div className="h-[3rem] w-[7.3rem] bg-[#F8F8F8] rounded-3xl flex flex-row text-xl font-bold mt-5 ml-5">
            <div className="flex ml-5 gap-6">
              <h1 className="text-2xl mt-[0.3rem]">-</h1>
              <h1 className="mt-[0.6rem] font-medium">1</h1>
              <h1 className="mt-[0.4rem]  text-2xl font-medium">+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
