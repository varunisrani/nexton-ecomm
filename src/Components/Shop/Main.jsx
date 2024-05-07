import Product from "../Product";
import Productrow from "./Productrow";
import Select from "./Select";

export default function Main() {
  return (
    <main className="flex flex-col gap-10 ">
      <div className="flex flex-col gap-10 mb-10 phone:hidden">
        <Productrow />
        <Productrow />
        <Productrow />
      </div>
      <div className="flex flex-row mad1:hidden mad2:hidden mad3:hidden mad4:hidden mad5:hidden mad6:hidden">
        <button className="text-[0.9rem] w-20 h-8 border rounded-full border-black">
          Filters
        </button>
        <button className="text-[0.9rem] w-40 h-8 border rounded-full border-black phone:ml-[4.7rem]">
          Rows per page
        </button>
      </div>
      <div className="flex flex-col phone:mt-2 gap-7">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="absolute right-60 top-[107rem] mad4:absolute mad4:right-20 mad1:top-[107rem] mad1:absolute mad1:right-20 mad1:top-[107rem]  mad6:top-[107rem] mad6:absolute mad6:right-20 mad6:top-[107rem] phone:hidden">
        <Select />
      </div>
    </main>
  );
}
