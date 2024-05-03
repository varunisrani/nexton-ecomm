import Productrow from "./Productrow";
import Select from "./Select";

export default function Main() {
  return (
    <main className="flex flex-col gap-10">
      <div className="flex flex-col gap-10 mb-10">
        <Productrow />
        <Productrow />
        <Productrow />
      </div>
      <div className="absolute right-60 top-[107rem] mad4:absolute mad4:right-20 mad1:top-[107rem] mad1:absolute mad1:right-20 mad1:top-[107rem] ">
        <Select />
      </div>
    </main>
  );
}
