import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
