import Image from "next/image";

export default function Asec1() {
  return (
    <>
      <span className="text-4xl font-medium">About us</span>
      <h1 className="w-[44rem] mt-4">
        We not only help you design exceptional products, but also make it easy
        for you to share your designs with more like-minded people.
      </h1>

      <div className="flex flex-row mt-10">
        <Image
          src="https://i.ibb.co/K2g1nBM/image.png"
          height="500"
          width="500"
          alt=""
          className="rounded-2xl"
        />
        <div className="flex flex-col ml-[20rem] mt-[10rem] mad3:mt-[6rem] mad3:ml-[10rem] mad4:ml-[10rem]">
          <h1 className="w-[35rem] text-5xl font-medium ">
            Provide fashionable and qualifed products
          </h1>
          <h1 className="w-[45rem] mt-6 text-xl">
            Already millions of people are very satisfied by thi. s page builder
            and the number is growing more and more. Technolog developing,
            requirements are increasing. Riode has brought.
          </h1>
        </div>
      </div>
      <div className="flex flex-row mt-[5rem]">
        <div className="flex flex-col ml-[0rem] mt-[10rem] mad3:mt-[6rem]">
          <h1 className="w-[35rem] text-5xl font-medium ">
            Provide fashionable and qualifed products
          </h1>
          <h1 className="w-[45rem] mt-4 text-xl">
            Already millions of people are very satisfied by thi. s page builder
            and the number is growing more and more. Technolog developing,
            requirements are increasing. Riode has brought.
          </h1>
        </div>
        <Image
          src="https://i.ibb.co/BT0Kcf6/image.png"
          height="550"
          width="550"
          alt=""
          className="rounded-2xl ml-[27rem] mad3:ml-[10rem] mad4:ml-[10rem]"
        />
      </div>
    </>
  );
}
