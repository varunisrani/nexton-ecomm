export default function Input({ label, place, type }) {
  return (
    <div className="flex flex-col mt-2 ml-5 phone:mr-5">
      {" "}
      {/* Added phone:mr-5 for right margin */}
      <h1 className="text-1rem mb-2 font-medium">{label}</h1>
      <div className="h-[2.3rem] w-[16rem] phone:w-full rounded-xl border border-1 border-brdc text-[1rem] font-normal">
        {/* Removed 'type="text"' as it doesn't apply to div */}
        <input
          className="h-[2.1rem] w-full phone:w-[16rem] ml-4 text-[0.9rem] focus:outline-none" // Adjusted width classes
          placeholder={place}
          type={type}
        />
      </div>
    </div>
  );
}
