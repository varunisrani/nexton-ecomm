import Product from "../Product";

export default function Productrow() {
  return (
    <div className="flex flex-row gap-20 md:gap-10 mad3:flex mad3:flex-row mad3:justify-between mad3:mr-[3rem] ">
      <Product />
      <Product />
      <Product />
      <div className="mad3:hidden">
        <Product />
      </div>
    </div>
  );
}
