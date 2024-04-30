export default function Box() {
  return (
    <div className="flex flex-col h-[35rem] w-[35rem] border border-[#E5E7EB] rounded-2xl ml-[5rem] mt-5">
      <div className="flex mt-10 ml-7">
        <h1>142 reviews</h1>
        <div className="flex flex-col ml-[20rem]">
          <h1 className="text-2xl font-medium">$169.99</h1>
          <h1 className="text-[1.1rem] font-medium text-black ml-[1.4rem]">
            $<span className="line-through">199.99</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col ml-7 mt-10">
        <h1 className="text-xl font-semibold">Size: S</h1>
        <div className="flex flex-row gap-3 mt-5">
          <div className="h-[3rem] w-[5.5rem]  rounded-2xl bg-vib">
            <h1 className="text-center mt-[0.7rem] text-[1.1rem] font-semibold text-white">
              S
            </h1>
          </div>
          <div className="h-[3rem] w-[5.5rem] border border-black/50 rounded-2xl">
            <h1 className="text-center mt-[0.6rem] text-[1.1rem] font-semibold text-black">
              M
            </h1>
          </div>
          <div className="h-[3rem] w-[5.5rem] border border-black/50 rounded-2xl ">
            <h1 className="text-center mt-[0.6rem] text-[1.1rem] font-semibold text-black">
              L
            </h1>
          </div>
          <div className="h-[3rem] w-[5.5rem] border border-black/50 rounded-2xl ">
            <h1 className="text-center mt-[0.6rem] text-[1.1rem] font-semibold text-black">
              XL
            </h1>
          </div>
          <div className="h-[3rem] w-[5.5rem] border border-black/50 rounded-2xl">
            <h1 className="text-center mt-[0.6rem] text-[1.1rem] font-semibold text-black">
              2XL
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-7 mt-[3rem]">
        <div className="h-[3rem] w-[8rem] bg-[#F8F8F8] rounded-3xl flex flex-row text-xl font-bold">
          <div className="flex ml-5 gap-6">
            <h1 className="text-3xl mt-[0.3rem]">-</h1>
            <h1 className="mt-[0.6rem] font-medium">1</h1>
            <h1 className="mt-[0.2rem] text-3xl font-medium">+</h1>
          </div>
        </div>
        <button className="text-[1.1rem] w-[11rem] h-[4rem] bg-black text-white rounded-full  text-xl font-medium ml-[12rem]">
          Add to cart
        </button>
      </div>
      <div className="flex flex-row ml-7 mt-8">
        <h1 className="text-xl">$169.99 x 1</h1>
        <h1 className="text-xl ml-[19rem]">$169.99</h1>
      </div>
      <div className="flex flex-row ml-7 mt-4">
        <h1 className="text-xl">Tax estimate</h1>
        <h1 className="text-xl ml-[21.5rem]">$0</h1>
      </div>

      <div className="border border-b-[#F3F4F6] w-[31rem] h-0 mt-[1.5rem] ml-7"></div>
      <div className="flex flex-row ml-7 mt-4">
        <h1 className="text-xl font-medium">Total</h1>
        <h1 className="text-xl ml-[23rem] font-medium">$169.99</h1>
      </div>
    </div>
  );
}
