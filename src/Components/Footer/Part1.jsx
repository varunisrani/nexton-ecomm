import Image from "next/image";

export default function Part1() {
  return (
    <div className="flex flex-col">
      <Image
        src="https://i.ibb.co/ZTM1pJF/logo.png"
        height={80}
        width={120}
        alt=""
      />
      <div className="flex flex-col text-[1rem] gap-3 mt-4">
        <h1>Facebook</h1>
        <h1>Youtube</h1>
        <h1>Telegram</h1>
        <h1>Twitter</h1>
      </div>
    </div>
  );
}
