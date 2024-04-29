import Navbar from "@/Components/Navbar";
import Slider from "@/Components/Slider";
import Part1 from "./Part1";

import Image from "next/image";
import Footer from "@/Components/Footer/Footer";

export default function Page() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col text-7[1rem] mr-[9rem] ml-[8rem]">
        <Navbar />
      </div>
      <Slider />

      <div className="flex flex-row justify-between   w-[100rem] h-[5.3rem] border border-black/20  mt-[3rem] rounded-[1rem] mr-[8rem] ml-[9rem] ">
        <div className="ml-10 mt-5 flex flex-row  w-[100rem] justify-between mr-10">
          <Part1 title="Free shipping" stitle="On orders over $50.00" />
          <Part1 title="Very easy to return" stitle="Just phone number" />
          <Part1 title="Worldwide delivery" stitle="Fast delivery worldwide" />
          <Part1
            title="Refunds policy"
            stitle="60 days return for any reason"
          />
        </div>
      </div>

      <div className="flex flex-col mr-[9rem] ml-[9rem]">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[5.3rem] font-medium ">
          <h1>Start exploring.</h1>
          <h1 className="text-black/60">Good things are waiting for you</h1>
        </div>
      </div>
      <div className="flex flex-row mr-[9rem] ml-[9rem] mt-[2rem]">
        <div className="flex flex-row w-[20rem] h-[5.3rem] bg-gray rounded-lg mr-10">
          <div className="flex flex-col ml-7 mt-7">
            <h1 className="text-[1rem] font-bold">For Men's</h1>
            <h1 className="text-xs">Starting at $24</h1>
          </div>
          <h1 className="ml-[5.3rem] mt-8 text-[0.9rem]">Shop Now</h1>
        </div>
        <div className="flex flex-row w-[20rem] h-[5.3rem] bg-gray rounded-lg  mr-10">
          <div className="flex flex-col ml-7 mt-7">
            <h1 className="text-[1rem] font-bold">For Men's</h1>
            <h1 className="text-xs">Starting at $24</h1>
          </div>
          <h1 className="ml-[5.3rem] mt-8 text-[0.9rem]">Shop Now</h1>
        </div>
        <div className="flex flex-row w-[20rem] h-[5.3rem] bg-gray rounded-lg  mr-10">
          <div className="flex flex-col ml-7 mt-7">
            <h1 className="text-[1rem] font-bold">For Men's</h1>
            <h1 className="text-xs">Starting at $24</h1>
          </div>
          <h1 className="ml-[5.3rem] mt-8 text-[0.9rem]">Shop Now</h1>
        </div>
        <div className="flex flex-row w-[20rem] h-[5.3rem] bg-gray rounded-lg  mr-10">
          <div className="flex flex-col ml-7 mt-7">
            <h1 className="text-[1rem] font-bold">For Men's</h1>
            <h1 className="text-xs">Starting at $24</h1>
          </div>
          <h1 className="ml-[5.3rem] mt-8 text-[0.9rem]">Shop Now</h1>
        </div>
        <div className="flex flex-row w-[20rem] h-[5.3rem] bg-gray rounded-lg  mr-10">
          <div className="flex flex-col ml-7 mt-7">
            <h1 className="text-[1rem] font-bold">For Men's</h1>
            <h1 className="text-xs ">Starting at $24</h1>
          </div>
          <h1 className="ml-[5.3rem] mt-8 text-[0.9rem]">Shop Now</h1>
        </div>
      </div>

      <div className="flex flex-col mr-[9rem] ml-[9rem]">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[8.3rem] font-medium ">
          <h1>Recommendations.</h1>
          <h1 className="text-black/60">Best matching products for you</h1>
        </div>
      </div>

      <div className="flex flex-row mr-[9rem] ml-[9rem] gap-12 mt-[3rem]">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Image
              src="https://i.ibb.co/8shMTZ9/product-image.png"
              height={350}
              width={350}
              className="rounded-xl"
            />
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-semibold text-black">
                Black Automatic Watch
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-12">
                $169.99
              </h1>
            </div>
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-normal text-black">
                Accessories{" "}
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-[9rem]">
                $<span className="line-through">199.99</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="https://i.ibb.co/8shMTZ9/product-image.png"
              height={350}
              width={350}
              className="rounded-xl"
            />
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-semibold text-black">
                Black Automatic Watch
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-12">
                $169.99
              </h1>
            </div>
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-normal text-black">
                Accessories{" "}
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-[9rem]">
                $<span className="line-through">199.99</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="https://i.ibb.co/8shMTZ9/product-image.png"
              height={350}
              width={350}
              className="rounded-xl"
            />
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-semibold text-black">
                Black Automatic Watch
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-12">
                $169.99
              </h1>
            </div>
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-normal text-black">
                Accessories{" "}
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-[9rem]">
                $<span className="line-through">199.99</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="https://i.ibb.co/8shMTZ9/product-image.png"
              height={350}
              width={350}
              className="rounded-xl"
            />
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-semibold text-black">
                Black Automatic Watch
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-12">
                $169.99
              </h1>
            </div>
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-normal text-black">
                Accessories{" "}
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-[9rem]">
                $<span className="line-through">199.99</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mr-[9rem] ml-[9rem]">
        <div className="flex flex-row gap-2 text-[2.2rem] mt-[8.3rem] font-medium ">
          <h1>Best Sellers.</h1>
          <h1 className="text-black/60">Best selling of the month</h1>
        </div>
      </div>

      <div className="flex flex-row mr-[9rem] ml-[9rem] gap-12 mt-[3rem]">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Image
              src="https://i.ibb.co/8shMTZ9/product-image.png"
              height={350}
              width={350}
              className="rounded-xl"
            />
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-semibold text-black">
                Black Automatic Watch
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-12">
                $169.99
              </h1>
            </div>
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-normal text-black">
                Accessories{" "}
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-[9rem]">
                $<span className="line-through">199.99</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="https://i.ibb.co/8shMTZ9/product-image.png"
              height={350}
              width={350}
              className="rounded-xl"
            />
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-semibold text-black">
                Black Automatic Watch
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-12">
                $169.99
              </h1>
            </div>
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-normal text-black">
                Accessories{" "}
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-[9rem]">
                $<span className="line-through">199.99</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="https://i.ibb.co/8shMTZ9/product-image.png"
              height={350}
              width={350}
              className="rounded-xl"
            />
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-semibold text-black">
                Black Automatic Watch
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-12">
                $169.99
              </h1>
            </div>
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-normal text-black">
                Accessories{" "}
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-[9rem]">
                $<span className="line-through">199.99</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col">
            <Image
              src="https://i.ibb.co/8shMTZ9/product-image.png"
              height={350}
              width={350}
              className="rounded-xl"
            />
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-semibold text-black">
                Black Automatic Watch
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-12">
                $169.99
              </h1>
            </div>
            <div className="flex flex-row ml-3 mt-4">
              <h1 className="text-[1.1rem] font-normal text-black">
                Accessories{" "}
              </h1>
              <h1 className="text-[1.1rem] font-medium text-black ml-[9rem]">
                $<span className="line-through">199.99</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[8rem]">
        <Image
          src="https://i.ibb.co/KKXBBR8/hero-bg.png"
          height={200}
          width={1600}
          className="mt-8 ml-[9rem] mr-[9rem] rounded-2xl"
        />

        <h1 className="text-xl absolute top-[10rem] left-[14rem] right-50 bottom-0 text-center text-black p-4 ">
          100% Original Products
        </h1>

        <span className="text-[4rem] font-semibold absolute top-[13rem] left-[14rem] right-50 bottom-0 text-center text-black p-4">
          The All New Fashion
        </span>
        <span className="text-[4rem] font-semibold absolute top-[18.5rem] left-[14rem] right-50 bottom-0 text-center text-black p-4">
          Collection Items
        </span>

        <button className="text-[1.1rem] w-[10rem] h-[4rem] bg-black text-white rounded-full absolute top-[30rem] left-[15rem] right-50 bottom-0">
          Shop now
        </button>
      </div>
      <div className="mr-[8rem] ml-[8rem]">
        <Footer />
      </div>
    </div>
  );
}
