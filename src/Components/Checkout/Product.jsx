import Image from "next/image";

export default function Product() {
  return (
    <div className="mt-8 flex flex-row">
      <Image
        src="https://i.ibb.co/4gGzqdK/image.png"
        height={140}
        width={140}
        alt=""
      />
      <div className="flex flex-row">
        <div className="flex flex-col mt-1 ml-5">
          <h1 className="text-xl text-black font-medium">
            Black Automatic Watch
          </h1>
          <h1 className="mt-1">One size</h1>
          <div className="mt-5">
            <div className="h-[3rem] w-[8rem] bg-[#F8F8F8] rounded-3xl flex flex-row text-xl font-bold">
              <div className="flex ml-5 gap-6">
                <h1 className="text-3xl mt-[0.3rem]">-</h1>
                <h1 className="mt-[0.6rem] font-medium">1</h1>
                <h1 className="mt-[0.2rem] text-3xl font-medium">+</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <h1 className="text-[1.4rem] font-medium text-black ml-[9rem]">
            $<span className="">169.99</span>
          </h1>
          <h1 className="text-[1.2rem] font-medium text-black ml-[9.7rem]">
            $<span className="line-through">199.99</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
