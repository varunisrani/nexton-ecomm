export default function Part2({ main, text, text1, text2, text3 }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[0.9rem] font-bold">{main}</h1>
      <h1 className="text-[1rem] font-normal">{text}</h1>
      <h1 className="text-[1rem] font-normal">{text1}</h1>
      <h1 className="text-[1rem] font-normal">{text2}</h1>
      <h1 className="text-[1rem] font-normal">{text3}</h1>
    </div>
  );
}
