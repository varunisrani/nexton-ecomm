import Product from "../Product";

export default function Productrow() {
  return (
    <div className="flex flex-row gap-20 ml-[10rem] mad4:gap-12 mad4:ml-[2.5rem]  mad3:flex mad3:flex-row mad3:justify-between mad3:mr-[3rem] ">
      <Product />
      <Product />
      <div className="mad3:hidden">
        <Product />
      </div>
    </div>
  );
}
