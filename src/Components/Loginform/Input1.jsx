export default function Input1({ label, place, type }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-[1.2rem] mb-2 font-semibold">{label}</h1>
      <div
        type="text"
        className="h-[3rem] w-[28rem] rounded-xl border border-1 border-btext/40 text-[1rem] font-normal"
      >
        <input
          className="h-[2.7rem] w-[26rem] ml-4 text-[0.9rem] focus:outline-none "
          placeholder={place}
          type={type}
        />
      </div>
    </div>
  );
}
