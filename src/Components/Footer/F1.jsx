import Part1 from "./Part1";
import Part2 from "./Part2";

export default function F1() {
  return (
    <main className="flex flex-row mt-[5.5rem] w-full justify-between">
      <Part1 />
      <Part2
        main="Getting started"
        text="Release Notes"
        text1="Upgrade Guide"
        text2="Browser Support"
        text3="Dark Mode"
      />
      <Part2
        main="Explore"
        text="Prototyping"
        text1="Design systems"
        text2="Pricing"
        text3="Security"
      />
      <Part2
        main="Community"
        text="Discussion Forums"
        text1="Code of Conduct"
        text2="Contributing"
        text3="API Reference"
      />
    </main>
  );
}
