import Footer from "@/Components/Footer/Footer";
import MobileNavbar from "@/Components/MobileNavbar";
import Navbar from "@/Components/Navbar";
import Filter from "@/Components/Shop/Filter";
import Main from "@/Components/Shop/Main";

export default function page() {
  return (
    <main className="flex flex-col ml-[5rem] mr-[5rem] phone:ml-5 phone:mr-5">
      <Navbar />
      <MobileNavbar />
      <div className="flex flex-row ml-[2.1rem] mt-[4rem] phone:ml-[0.1rem] phone:mr-5">
        <Filter />
        <Main />
      </div>

      <Footer />
    </main>
  );
}
