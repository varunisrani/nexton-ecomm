import Image from "next/image";

export default function Slider() {
  return (
    <div className="relative">
      <Image
        src="https://i.ibb.co/KKXBBR8/hero-bg.png"
        height={400}
        width={1920}
        className="mt-8"
        alt=""
      />
      <h1 className="text-xl absolute top-[10rem] mad1:top-[7rem] mad1:left-[6rem] left-[8rem] right-50 bottom-0 text-center text-black p-4 ">
        Starting from: $49.99
      </h1>

      <span className="text-[5rem] mad3:text-[4rem] mad2:text-[4rem] mad1:text-[4rem] font-semibold absolute top-[13rem] left-[8rem] mad1:top-[10rem] mad1:left-[6rem] right-50 bottom-0 text-center text-black p-4">
        Exclusive collection
      </span>
      <span className="text-[5rem] mad3:text-[4rem] mad2:text-[4rem] mad1:text-[4rem] font-semibold absolute top-[18.5rem] left-[8rem] mad1:top-[15rem] mad1:left-[6rem] right-50 bottom-0 text-center text-black p-4">
        for everyone
      </span>

      <button className="text-[1.1rem] w-[13rem] h-[5rem] bg-black text-white rounded-full absolute top-[28rem] left-[9rem] mad1:top-[24rem] mad1:left-[7rem] right-50 bottom-0">
        Explore now
      </button>
    </div>
  );
}
