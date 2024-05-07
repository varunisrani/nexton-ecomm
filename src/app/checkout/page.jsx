import Csec1 from "@/Components/Checkout/Csec1";
import Csec2 from "@/Components/Checkout/Csec2";
import MCsec1 from "@/Components/Checkout/MCsec1";
import MCsec2 from "@/Components/Checkout/MCsec2";
import Footer from "@/Components/Footer/Footer";
import MobileNavbar from "@/Components/MobileNavbar";
import Navbar from "@/Components/Navbar";

export default function page() {
  return (
    <div className="flex flex-col ml-[5rem] mr-[5rem] phone:ml-5 phone:mr-5">
      <Navbar />
      <MobileNavbar />
      <div className="flex flex-row mad2:flex mad2:flex-col mad2:justify-center mad1:flex mad1:flex-col mad6:flex mad6:flex-col phone:hidden">
        <Csec1 />
        <Csec2 />
      </div>
      <div className="flex flex-col mad1:hidden mad2:hidden mad3:hidden mad4:hidden mad5:hidden mad6:hidden">
        <MCsec2 />
        <MCsec1 />
      </div>

      <Footer />
    </div>
  );
}
