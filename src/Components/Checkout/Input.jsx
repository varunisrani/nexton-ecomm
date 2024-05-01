export default function Input({ label, place, type }) {
  return (
    <div className="flex flex-col mt-2 ml-5">
      <h1 className="text-1rem mb-2 font-medium">{label}</h1>
      <div
        type="text"
        className="h-[2.3rem] w-[18rem] rounded-xl border border-1 border-brdc text-[1rem] font-normal"
      >
        <input
          className="h-[2.1rem] w-[16rem] ml-4 text-[0.9rem] focus:outline-none "
          placeholder={place}
          type={type}
        />
      </div>
    </div>
  );
}
