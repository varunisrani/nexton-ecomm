import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Slider from "@/Components/Slider";
import Part1 from "./Part1";
import Footer from "@/Components/Footer/Footer";
import S1 from "@/Components/Home/S1";
import Product from "@/Components/Product";
import MobileNavbar from "@/Components/MobileNavbar";
export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col text-7[1rem] mr-[5rem] ml-[5rem] phone:ml-5 phone:mr-5">
        <Navbar />
        <MobileNavbar />
      </div>
      <Slider />

      <div className="flex flex-row justify-between   w-[100rem] mad5:w-[110rem] mad4:w-[90rem] mad3:w-[81rem] mad2:w-[81rem] mad1:w-[70rem] mad6:w-[53rem] h-[5.3rem] border border-black/20  mt-[3rem] rounded-[1rem] mr-[5rem] ml-[5rem] phone:hidden">
        <div className="ml-10 mt-5 flex flex-row  w-[100rem] mad4:w-[90rem] mad5:w-[108rem] justify-between mr-10">
          <Part1 title="Free shipping" stitle="On orders over $50.00" />
          <Part1 title="Very easy to return" stitle="Just phone number" />
          <Part1 title="Worldwide delivery" stitle="Fast delivery worldwide" />
          <Part1
            title="Refunds policy"
            stitle="60 days return for any reason"
          />
        </div>
      </div>

      <div className="flex flex-col ml-5 mt-5 mad1:hidden mad2:hidden mad3:hidden mad4:hidden mad5:hidden mad6:hidden ">
        <h1 className="text-[1.1rem] font-semibold">
          Nexton® always with you
        </h1>
        <div className="flex flex-row text-[1rem] gap-4 mt-3 justify-between mr-5">
          <h1>Free shipping</h1>
          <h1>Very easy to return</h1>
        </div>
      </div>

      <div className="flex flex-col mr-[5rem] ml-[5rem] phone:ml-5 phone:mr-5">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[5.3rem] font-medium phone:text-2xl phone:flex phone:flex-col ">
          <h1>Start exploring.</h1>
          <h1 className="text-black/60 phone:hidden">
            Good things are waiting for you
          </h1>
        </div>
      </div>
      <div className="flex flex-row mr-[5rem] ml-[5rem] mt-[2rem] phone:ml-5 phone:mr-5">
        <S1 />
        <div className="phone:hidden">
          <S1 />
          <S1 />
          <S1 />
          <S1 />
        </div>
      </div>

      <div className="flex flex-col mr-[5rem] ml-[5rem] phone:ml-5 phone:mr-5">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[8.3rem] font-medium ">
          <h1 className="phone:text-2xl">Recommendations.</h1>
          <h1 className="text-black/60 phone:hidden">
            Best matching products for you
          </h1>
        </div>
      </div>

      <div className="flex flex-row  mr-[5rem] ml-[5rem] gap-5 mad5:flex mad5:flex-row mad5:justify-between mad4:gap-10 mt-[3rem] mad3:flex mad3:flex-row mad3:justify-between  mad2:flex mad2:flex-row mad2:justify-between mad1:flex mad1:flex-row mad1:justify-between mad6:flex mad6:flex-row mad6:justify-between mad4:flex mad4:flex-row mad4:justify-between phone:ml-5 phone:mr-5">
        <div className="flex flex-row">
          <Product />
        </div>
        <div className="flex flex-row phone:hidden">
          <Product />
        </div>
        <div className="flex flex-row mad6:hidden phone:hidden">
          <Product />
        </div>
        <div className="flex flex-row mad1:hidden mad6:hidden mad2:hidden mad3:hidden mad4:hidden phone:hidden">
          <Product />
        </div>
      </div>

      <div className="flex flex-col mr-[5rem] ml-[5rem] phone:ml-5 phone:mr-5">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[8.3rem] font-medium phone:text-2xl justify-between">
          <h1>Best Sellers.</h1>
          <h1 className="text-black/60 phone:hidden">
            Best selling of the month
          </h1>
        </div>
      </div>

      <div className="phone:ml-5 phone:mr-5 phone:mt-8">
        <Product />
      </div>

      <div className="relative mt-[2rem] phone:hidden">
        <Image
          src="https://i.ibb.co/KKXBBR8/hero-bg.png"
          height={200}
          width={1600}
          alt=""
          className="mt-8 ml-[9rem] mad3:hidden mad1:hidden mad6:hidden mad2:hidden mad4:hidden  mr-[9rem] rounded-2xl"
        />
        <Image
          src="https://i.ibb.co/KKXBBR8/hero-bg.png"
          height={200}
          width={1200}
          alt=""
          className="mt-8 ml-[9rem] mad4:ml-[3rem] mad3:ml-[3rem] mad1:ml-[3rem] mad6:ml-[3rem] mad2:ml-[3rem] mr-[9rem] rounded-2xl mad4:w-full mad4:mr-[20rem] mad3:w-full mad3:mr-[20rem] mad2:w-full mad2:mr-[20rem] mad1:w-full mad1:mr-[20rem] mad5:hidden"
        />

        <h1 className="text-xl absolute top-[10rem] left-[14rem] right-50 bottom-0 mad4:absolute mad4:top-[11rem] mad4:left-[8rem] mad4:right-50 mad4:bottom-0 mad3:absolute mad3:top-[9rem] mad3:left-[8rem] mad3:right-50 mad3:bottom-0 mad3:absolute mad2:top-[9rem] mad2:left-[8rem] mad2:right-50 mad2:bottom-0 mad1:top-[7rem] mad1:left-[8rem] mad1:right-50 mad1:bottom-0 mad6:top-[5rem] mad6:left-[8rem] mad6:right-50 mad6:bottom-0 text-center text-black p-4 ">
          100% Original Products
        </h1>

        <span className="text-[4rem] font-semibold absolute top-[13rem] left-[14rem] right-50 bottom-0 mad4:absolute mad4:top-[14rem] mad4:left-[8rem] mad4:right-50 mad4:bottom-0 mad3:top-[13rem] mad3:left-[8rem] mad3:right-50 mad3:bottom-0 mad2:top-[13rem] mad2:left-[8rem] mad2:right-50 mad2:bottom-0 mad1:top-[11rem] mad1:left-[8rem] mad1:right-50 mad1:bottom-0 mad6:top-[8rem] mad6:left-[8rem] mad6:right-50 mad6:bottom-0 text-center text-black p-4 mad6:text-5xl">
          The All New Fashion
        </span>
        <span className="text-[4rem] font-semibold absolute top-[18.5rem] left-[14rem] right-50 bottom-0 mad4:absolute mad4:top-[19.5rem] mad4:left-[8rem] mad4:right-50 mad4:bottom-0 mad3:top-[18.5rem] mad3:left-[8rem] mad3:right-50 mad3:bottom-0 mad2:top-[18.5rem] mad2:left-[8rem] mad2:right-50 mad2:bottom-0 mad1:top-[16rem] mad1:left-[8rem] mad1:right-50 mad1:bottom-0 mad6:top-[13rem] mad6:left-[8rem] mad6:right-50 mad6:bottom-0 text-center text-black p-4 mad6:text-5xl">
          Collection Items
        </span>

        <button className="text-[1.1rem] w-[10rem] h-[4rem] bg-black text-white rounded-full absolute top-[30rem] left-[15rem] right-50 bottom-0 mad4:absolute mad4:top-[29rem] mad4:left-[9rem] mad4:right-50 mad4:bottom-0 mad3:top-[28rem] mad3:left-[9rem] mad3:right-50 mad3:bottom-0 mad2:top-[28rem] mad2:left-[9rem] mad2:right-50 mad2:bottom-0 mad1:top-[25rem] mad1:left-[9rem] mad1:right-50 mad1:bottom-0 mad6:top-[19rem] mad6:left-[9rem] mad6:right-50 mad6:bottom-0">
          Shop now
        </button>
      </div>
      <div className="mr-[5rem] ml-[5rem] phone:ml-5 phone:mr-5">
        <Footer />
      </div>
    </div>
  );
}
