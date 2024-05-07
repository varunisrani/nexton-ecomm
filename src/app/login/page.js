import LoginForm from "@/Components/Loginform/LoginForm copy";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import MobileNavbar from "@/Components/MobileNavbar";

export default function page() {
  return (
    <main className="flex flex-col text-7xl mr-[5rem] ml-[5rem] phone:ml-5 phone:mr-5">
      <Navbar />
      <MobileNavbar />
      <LoginForm />
      <Footer />
    </main>
  );
}
