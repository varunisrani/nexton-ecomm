export default function Miniinput({ label, place, type }) {
  return (
    <div className="flex flex-col mt-2 ml-5">
      <h1 className="text-1rem mb-2 font-medium">{label}</h1>
      <div className="h-9 w-18 phone:w-28 rounded-xl border border-1 border-brdc text-1rem font-normal">
        {" "}
        {/* Adjusted width classes */}
        <input
          className="h-7 w-16 phone:w-20 ml-4 text-0.9rem focus:outline-none" // Adjusted width classes
          placeholder={place}
          type={type}
        />
      </div>
    </div>
  );
}
