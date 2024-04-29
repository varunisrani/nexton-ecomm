export default function Part1({ title, stitle }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-[1rem] font-bold">{title}</h1>
      <h1 className="text-xs">{stitle}</h1>
    </div>
  );
}
