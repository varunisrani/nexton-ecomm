import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar";
import Box from "@/Components/Product/Box";
import Sec1 from "@/Components/Product/Sec1";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex flex-col ml-[5rem] mr-[5rem]">
      <Navbar />
      <div className="flex flex-row mt-5">
        <div className="flex flex-col mr-5 gap-5 mt-5 ml-7">
          <Image
            src="https://i.ibb.co/4gGzqdK/image.png"
            height={140}
            width={140}
            alt=""
          />
          <Image
            src="https://i.ibb.co/1sScg5K/product-27-1-4-1.png"
            height={140}
            width={140}
            alt=""
          />
          <Image
            src="https://i.ibb.co/XsgP5gP/product-27-3-1.png"
            height={140}
            width={140}
            alt=""
          />
          <Image
            src="https://i.ibb.co/Xzx0Wv7/product-27-4-1.png"
            height={140}
            width={140}
            alt=""
          />
        </div>

        <div className="flex ">
          <Image
            src="https://i.ibb.co/4gGzqdK/image.png"
            height={625}
            width={625}
            className="mt-6 rounded-xl"
            alt=""
          />
          <div className="mt-6 ml-[8rem]">
            <Box />
          </div>
        </div>
      </div>
      <div className="ml-7 mt-[4rem]">
        <Sec1 />
      </div>
      <Footer />
    </main>
  );
}
