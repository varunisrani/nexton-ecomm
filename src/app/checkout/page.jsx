import Csec1 from "@/Components/Checkout/Csec1";
import Csec2 from "@/Components/Checkout/Csec2";
import MCsec1 from "@/Components/Checkout/MCsec1";
import MCsec2 from "@/Components/Checkout/MCsec2";
import Footer from "@/Components/Footer/Footer";
import MobileNavbar from "@/Components/MobileNavbar";
import Navbar from "@/Components/Navbar";

export default function page() {
  return (
    <div className="checkout">
      <Navbar />
      <MobileNavbar />
      <div className="cmain">
        <Csec1 />
        <Csec2 />
      </div>
      <div className="mmain">
        <MCsec2 />
        <MCsec1 />
      </div>

      <Footer />
    </div>
  );
}
