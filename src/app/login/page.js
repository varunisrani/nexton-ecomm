import LoginForm from "@/Components/Loginform/LoginForm copy";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import MobileNavbar from "@/Components/MobileNavbar";

export default function page() {
  return (
    <main className="login">
      <Navbar />
      <MobileNavbar />
      <LoginForm />
      <Footer />
    </main>
  );
}
