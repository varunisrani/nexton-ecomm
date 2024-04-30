import LoginForm from "@/Components/Loginform/LoginForm copy";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";

export default function page() {
  return (
    <main className="flex flex-col text-7xl mr-[5rem] ml-[5rem]">
      <Navbar />
      <LoginForm />
      <Footer />
    </main>
  );
}
