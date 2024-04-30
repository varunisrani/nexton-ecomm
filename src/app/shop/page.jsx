import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar";
import Filter from "@/Components/Shop/Filter";
import Main from "@/Components/Shop/Main";

export default function page() {
  return (
    <main className="flex flex-col ml-[5rem] mr-[5rem]">
      <Navbar />
      <div className="flex flex-row ml-[2.1rem] mt-[4rem]">
        <Filter />
        <Main />
      </div>

      <Footer />
    </main>
  );
}
