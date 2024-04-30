export default function FilterChoice({ options }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          <input type="checkbox" />
          <h1 className="text-[1rem] ml-2">{option}</h1>
        </div>
      ))}
    </div>
  );
}
