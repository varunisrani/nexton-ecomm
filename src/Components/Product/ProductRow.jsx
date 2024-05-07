import Product from "../Product";

export default function Productrow() {
  return (
    <div className="productrow">
      <Product />
      <Product />
      <div className="mad6:hidden">
        <Product />
      </div>
      <div className="mad3:hidden mad2:hidden mad1:hidden mad6:hidden">
        <Product />
      </div>
    </div>
  );
}
