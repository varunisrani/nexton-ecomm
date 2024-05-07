import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col phone:mr-1[rem]">
      <Image
        src="https://i.ibb.co/8shMTZ9/product-image.png"
        height={350}
        width={350}
        className="rounded-xl phone:mr-1[rem] "
        alt=""
      />
      <div className="flex flex-row ml-3 mt-4 phone:ml-1">
        <h1 className="text-[1.1rem] font-semibold text-black">
          Black Automatic Watch
        </h1>
        <h1 className="text-[1.1rem] font-medium text-black ml-12">$169.99</h1>
      </div>
      <div className="flex flex-row ml-3 mt-4 phone:ml-1">
        <h1 className="text-[1.1rem] font-normal text-black">Accessories </h1>
        <h1 className="text-[1.1rem] font-medium text-black ml-[9rem] phone:ml-[8rem]">
          $<span className="line-through">199.99</span>
        </h1>
      </div>
    </div>
  );
}
