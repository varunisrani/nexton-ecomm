import Footer from "../../Components/Footer/Footer";
import LoginForm from "../../Components/Loginform/LoginForm";
import Navbar from "../../Components/Navbar";

export default function page() {
  return (
    <main className="flex flex-col text-7xl mr-[8rem] ml-[8rem]">
      <Navbar />
      <LoginForm />
      <Footer />
    </main>
  );
}
