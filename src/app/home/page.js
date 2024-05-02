import Navbar from "@/Components/Navbar";
import Slider from "@/Components/Slider";
import Part1 from "./Part1";

import Image from "next/image";
import Footer from "@/Components/Footer/Footer";
import S1 from "@/Components/Home/S1";
import Product from "@/Components/Product";

export default function Page() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col text-7[1rem] mr-[5rem] ml-[5rem]">
        <Navbar />
      </div>
      <Slider />

      <div className="flex flex-row justify-between   w-[100rem] mad4:w-[90rem] h-[5.3rem] border border-black/20  mt-[3rem] rounded-[1rem] mr-[5rem] ml-[5rem] ">
        <div className="ml-10 mt-5 flex flex-row  w-[100rem] mad4:w-[90rem] justify-between mr-10">
          <Part1 title="Free shipping" stitle="On orders over $50.00" />
          <Part1 title="Very easy to return" stitle="Just phone number" />
          <Part1 title="Worldwide delivery" stitle="Fast delivery worldwide" />
          <Part1
            title="Refunds policy"
            stitle="60 days return for any reason"
          />
        </div>
      </div>

      <div className="flex flex-col mr-[5rem] ml-[5rem]">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[5.3rem] font-medium ">
          <h1>Start exploring.</h1>
          <h1 className="text-black/60">Good things are waiting for you</h1>
        </div>
      </div>
      <div className="flex flex-row mr-[5rem] ml-[5rem] mt-[2rem]">
        <S1 />
        <S1 />
        <S1 />
        <S1 />
        <S1 />
      </div>

      <div className="flex flex-col mr-[5rem] ml-[5rem]">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[8.3rem] font-medium ">
          <h1>Recommendations.</h1>
          <h1 className="text-black/60">Best matching products for you</h1>
        </div>
      </div>

      <div className="flex flex-row mr-[5rem] ml-[5rem] gap-5 mad4:gap-10 mt-[3rem]">
        <div className="flex flex-row">
          <Product />
        </div>
        <div className="flex flex-row">
          <Product />
        </div>
        <div className="flex flex-row">
          <Product />
        </div>
        <div className="flex flex-row">
          <Product />
        </div>
      </div>

      <div className="flex flex-col mr-[5rem] ml-[5rem]">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[8.3rem] font-medium ">
          <h1>Best Sellers.</h1>
          <h1 className="text-black/60">Best selling of the month</h1>
        </div>
      </div>

      <div className="relative mt-[8rem]">
        <Image
          src="https://i.ibb.co/KKXBBR8/hero-bg.png"
          height={200}
          width={1600}
          alt=""
          className="mt-8 ml-[9rem] mad4:hidden mr-[9rem] rounded-2xl"
        />
        <Image
          src="https://i.ibb.co/KKXBBR8/hero-bg.png"
          height={200}
          width={1200}
          alt=""
          className="mt-8 ml-[9rem] mad4:ml-[3rem] mr-[9rem] rounded-2xl mad4:w-full mad4:mr-[20rem] mad5:hidden"
        />

        <h1 className="text-xl absolute top-[10rem] left-[14rem] right-50 bottom-0 mad4:absolute mad4:top-[11rem] mad4:left-[8rem] mad4:right-50 mad4:bottom-0 text-center text-black p-4 ">
          100% Original Products
        </h1>

        <span className="text-[4rem] font-semibold absolute top-[13rem] left-[14rem] right-50 bottom-0 mad4:absolute mad4:top-[14rem] mad4:left-[8rem] mad4:right-50 mad4:bottom-0 text-center text-black p-4">
          The All New Fashion
        </span>
        <span className="text-[4rem] font-semibold absolute top-[18.5rem] left-[14rem] right-50 bottom-0 mad4:absolute mad4:top-[19.5rem] mad4:left-[8rem] mad4:right-50 mad4:bottom-0 text-center text-black p-4">
          Collection Items
        </span>

        <button className="text-[1.1rem] w-[10rem] h-[4rem] bg-black text-white rounded-full absolute top-[30rem] left-[15rem] right-50 bottom-0 mad4:absolute mad4:top-[29rem] mad4:left-[9rem] mad4:right-50 mad4:bottom-0">
          Shop now
        </button>
      </div>
      <div className="mr-[5rem] ml-[5rem]">
        <Footer />
      </div>
    </div>
  );
}
