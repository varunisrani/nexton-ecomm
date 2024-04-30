import Productrow from "./ProductRow";

export default function Sec1() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-semibold">Black Automatic Watch</h1>
      <h1 className="w-[55rem] mt-5 font-normal">
        The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
        1922. Wickett had previously worked for the Old Town Canoe Co from 1900
        to 1914. Manufacturing of the classic wooden canoes in Valley Park,
        Missouri ceased in 1978.
      </h1>

      <div className="flex flex-col mt-10">
        <h1 className="text-3xl font-semibold">Fabric + Care</h1>
        <h1 className="font-normal mt-2">Material: Soft wool blend</h1>
        <h1 className="font-normal">Color: Various</h1>
      </div>

      <div className="flex flex-col mt-10">
        <h1 className="text-3xl font-semibold">Sale performance</h1>
        <h1 className="font-normal mt-2">Sales: 0</h1>
        <h1 className="font-normal">Review Count: -</h1>
        <h1 className="font-normal">Review Average: -</h1>
      </div>

      <div className="flex flex-col mt-[5rem]">
        <h1 className="text-4xl font-semibold">Recommended products</h1>
        <div className="mt-10">
          <Productrow />
        </div>
      </div>
    </div>
  );
}
