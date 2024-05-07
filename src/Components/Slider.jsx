import Image from "next/image";

export default function Slider() {
  return (
    <div className="relative phone:w-full phone:h-[30rem] phone:bg-gray phone:mt-5">
      <Image
        src="https://i.ibb.co/KKXBBR8/hero-bg.png"
        height={400}
        width={1920}
        className="mt-8 phone:hidden"
        alt="p"
      />
      <h1 className="text-xl phone:absolute phone:left-1 absolute top-[7rem] mad1:top-[7rem] mad1:left-[6rem] mad6:top-[5rem] mad6:left-[6rem] left-[8rem] right-50 bottom-0 text-center text-black p-4 ">
        Starting from: $49.99
      </h1>

      <span className="text-[5rem] phone:absolute phone:left-1 phone:text-3xl phone:top-[10rem] mad3:text-[4rem] mad2:text-[4rem] mad1:text-[4rem] mad6:top-[9rem] mad6:left-[6rem] mad6:text-5xl font-semibold absolute top-[13rem] left-[8rem] mad1:top-[10rem] mad1:left-[6rem] right-50 bottom-0 text-center text-black p-4">
        Exclusive collection
      </span>
      <span className="text-[5rem]  phone:absolute phone:left-1  phone:top-[12.3rem] phone:text-3xl  mad3:text-[4rem] mad2:text-[4rem] mad1:text-[4rem] font-semibold absolute top-[18.5rem] left-[8rem] mad1:top-[15rem] mad1:left-[6rem] mad6:top-[13rem] mad6:left-[6rem] mad6:text-5xl right-50 bottom-0 text-center text-black p-4">
        for everyone
      </span>

      <button className="text-[1.1rem] phone:absolute phone:left-4  phone:top-[18rem] phone:w-[10rem] phone:h-[3rem] w-[13rem] h-[5rem] bg-black text-white rounded-full absolute top-[28rem] left-[9rem] mad1:top-[24rem] mad1:left-[7rem] mad6:top-[20rem] mad6:left-[7rem] right-50 bottom-0">
        Explore now
      </button>
    </div>
  );
}
