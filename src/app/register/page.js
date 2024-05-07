import RegisterForm from "@/Components/Registerform/RegisterForm";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import MobileNavbar from "@/Components/MobileNavbar";

export default function page() {
  return (
    <main className="register">
      <MobileNavbar />
      <Navbar />
      <RegisterForm />
      <Footer />
    </main>
  );
}
