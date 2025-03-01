import Footer from "@/Components/Footer/Footer";
import MobileNavbar from "@/Components/MobileNavbar";
import Navbar from "@/Components/Navbar";
import Box from "@/Components/Product/Box";
import Sec1 from "@/Components/Product/Sec1";
import Image from "next/image";

export default function page() {
  return (
    <main className="product">
      <MobileNavbar />
      <Navbar />
      <div className="flex flex-row mt-5 phone:flex phone:flex-col">
        <Image
          src="https://i.ibb.co/8shMTZ9/product-image.png"
          height={350}
          width={350}
          className="productimg"
          alt=""
        />
        <div className="dproductimgs">
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

        <div className="mproductimgs">
          <Image
            src="https://i.ibb.co/4gGzqdK/image.png"
            height={100}
            width={100}
            alt=""
          />
          <Image
            src="https://i.ibb.co/1sScg5K/product-27-1-4-1.png"
            height={100}
            width={100}
            alt=""
          />
          <Image
            src="https://i.ibb.co/XsgP5gP/product-27-3-1.png"
            height={100}
            width={100}
            alt=""
          />
        </div>
        <div className="flex phone:hidden">
          <Image
            src="https://i.ibb.co/4gGzqdK/image.png"
            height={625}
            width={625}
            className="mt-6 rounded-xl mad4:hidden mad3:hidden mad2:hidden mad1:hidden mad6:hidden"
            alt=""
          />
          <Image
            src="https://i.ibb.co/4gGzqdK/image.png"
            height={800}
            width={2000}
            className="mt-6 rounded-xl mad5:hidden mad4:w-[45rem] mad3:w-[50rem] mad2:w-[50rem] mad1:w-[30rem] mad6:hidden"
            alt=""
          />
          <div className="productbox">
            <Box />
          </div>
        </div>
      </div>
      <div className="ml-7 mt-[4rem] phone:ml-2">
        <Sec1 />
      </div>
      <Footer />
    </main>
  );
}
