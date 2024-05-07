export default function MobileNavbar() {
  return (
    <div className="mnav">
      <h1 className="text-[1rem] phone:mt-5">Logo</h1>
      <div className="h-[2.5rem] w-[12rem] bg-gray rounded-full flex ml-5 phone:mt-3">
        <input
          className="h-[2rem] w-[8rem] bg-gray text-[0.9rem] ml-2 mt-1 focus:outline-none"
          placeholder="Search here"
        />
        <h1 className="text-[1rem] absolute right-0 mt-3 mr-5">Icon</h1>
      </div>
    </div>
  );
}
