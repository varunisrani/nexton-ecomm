import Product from "../Product";

export default function Productrow() {
  return (
    <div className="flex flex-row gap-20 ml-[10rem] mad4:gap-12 mad4:ml-[6rem]">
      <Product />
      <Product />
      <Product />
    </div>
  );
}
