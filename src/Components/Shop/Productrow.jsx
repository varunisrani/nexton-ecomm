import Product from "../Product";

export default function Productrow() {
  return (
    <div className="flex flex-row gap-20 ml-[10rem] mad1:ml-[5rem] mad4:gap-12 mad4:ml-[2.5rem]  mad3:flex mad3:flex-row mad3:justify-between mad3:mr-[3rem] mad1:flex mad1:flex-row mad1:justify-between mad1:mr-[3rem]">
      <Product />
      <Product />
      <div className="mad3:hidden mad1:hidden mad2:hidden">
        <Product />
      </div>
    </div>
  );
}
