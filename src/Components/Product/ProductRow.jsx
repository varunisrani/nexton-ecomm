import Product from "../Product";

export default function Productrow() {
  return (
    <div className="flex flex-row gap-20 md:gap-10">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
