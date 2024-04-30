import Aform from "@/Components/About/Aform";
import Asec1 from "@/Components/About/asec1";
import Footer from "@/Components/Footer/Footer";
import { Input } from "@/Components/Input";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex flex-col ml-[5rem] mr-[5rem]">
      <Navbar />
      <div className="flex flex-col ml-7 mt-[3rem]">
        <Asec1 />
        <Aform />
        <Footer />
      </div>
    </main>
  );
}
