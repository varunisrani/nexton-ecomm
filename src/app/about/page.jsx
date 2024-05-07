import Aform from "@/Components/About/Aform";
import Asec1 from "@/Components/About/Asec1";

import Footer from "@/Components/Footer/Footer";
import MobileNavbar from "@/Components/MobileNavbar";
import Navbar from "@/Components/Navbar";

export default function page() {
  return (
    <main className="flex flex-col ml-[5rem] mr-[5rem] phone:ml-5 phone:mr-5">
      <MobileNavbar />
      <Navbar />
      <div className="flex flex-col ml-7 mt-[3rem] phone:ml-1">
        <Asec1 />
        <Aform />
        <Footer />
      </div>
    </main>
  );
}
