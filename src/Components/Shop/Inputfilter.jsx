export default function Inputfilter({ label, price }) {
  return (
    <div>
      <h1 className="text-[1rem]">{label}</h1>
      <div className="w-[8rem] h-[2.3rem] border border-black/40 rounded-full">
        <input
          type="text"
          className="w-[7rem] ml-2 mt-[0.4rem] focus:outline-none"
          value={price}
        />
      </div>
    </div>
  );
}
