import Csec1 from "@/Components/Checkout/Csec1";
import Csec2 from "@/Components/Checkout/Csec2";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar";

export default function page() {
  return (
    <div className="flex flex-col ml-[8rem] mr-[8rem]">
      <Navbar />
      <div className="flex flex-row">
        <Csec1 />
        <Csec2 />
      </div>
      <Footer />
    </div>
  );
}
