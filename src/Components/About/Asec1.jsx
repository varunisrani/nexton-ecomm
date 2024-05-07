import Image from "next/image";

export default function Asec1() {
  return (
    <>
      <span className="text-4xl font-medium phone:text-3xl phone:font-semibold">
        About us
      </span>
      <h1 className="w-[44rem] mt-4 phone:w-[19rem]">
        We not only help you design exceptional products, but also make it easy
        for you to share your designs with more like-minded people.
      </h1>

      <div className="flex flex-row mt-10 phone:flex phone:flex-col">
        <Image
          src="https://i.ibb.co/K2g1nBM/image.png"
          height="500"
          width="500"
          alt=""
          className="rounded-2xl"
        />

        <div className="flex flex-col ml-[20rem] phone:ml-1 mt-[10rem] mad3:mt-[6rem] mad3:ml-[10rem]  mad2:mt-[6rem] mad2:ml-[10rem] mad1:mt-[6rem] mad1:ml-[5rem] mad6:mt-[6rem] mad6:ml-[2rem] mad4:ml-[10rem] phone:mt-10">
          <h1 className="w-[35rem] phone:w-[20rem] text-5xl font-medium mad2:text-4xl mad1:text-4xl mad6:text-4xl phone:text-2xl phone:font-semibold">
            Provide fashionable and qualifed products
          </h1>
          <h1 className="w-[45rem] phone:w-[20rem] mt-6 text-xl mad6:text-[1rem] mad6:w-[31rem] phone:text-[1rem]">
            Already millions of people are very satisfied by thi. s page builder
            and the number is growing more and more. Technolog developing,
            requirements are increasing. Riode has brought.
          </h1>
        </div>
      </div>
      <div className="flex flex-row mt-[5rem] phone:flex phone:flex-col">
        <div className="flex flex-col ml-[0rem] phone:mt-5 mt-[10rem] mad3:mt-[6rem] mad2:mt-[6rem] mad1:mt-[6rem] mad6:mt-[6rem]">
          <Image
            src="https://i.ibb.co/BT0Kcf6/image.png"
            height="550"
            width="550"
            alt=""
            className="rounded-2xl ml-[27rem] phone:ml-0 mad3:ml-[10rem] mad2:ml-[10rem] mad1:ml-[5rem] mad6:ml-[2rem] mad4:ml-[10rem] mad1:hidden mad2:hidden mad3:hidden mad4:hidden mad5:hidden mad6:hidden"
          />
          <h1 className="w-[35rem] phone:w-[23rem] phone:mt-10 phone:font-semibold text-5xl font-medium mad2:text-4xl mad1:text-4xl mad6:text-4xl phone:text-2xl">
            Provide fashionable and qualifed products
          </h1>
          <h1 className="w-[45rem] phone:w-[20rem] mt-4 text-xl mad6:text-[1rem] mad6:w-[30rem] phone:text-[1rem]">
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
          className="rounded-2xl ml-[27rem] mad3:ml-[10rem] mad2:ml-[10rem] mad1:ml-[5rem] mad6:ml-[2rem] mad4:ml-[10rem] phone:hidden"
        />
      </div>
    </>
  );
}
