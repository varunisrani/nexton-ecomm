import Product from "../Product";

export default function Productrow() {
  return (
    <div className="flex flex-row gap-20 ml-[10rem]">
      <Product />
      <Product />
      <Product />
    </div>
  );
}
