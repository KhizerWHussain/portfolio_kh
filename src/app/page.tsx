import Header from "@/Components/Client/Header";
import HeroSection from "@/Components/Client/Hero";
import AboutMe from "@/Components/Server/About";
import Footer from "@/Components/Server/Footer";
import Services from "@/Components/Server/Service";

export default function Home() {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <HeroSection />
        <AboutMe />
        <Services />
        <Footer />
      </div>
    </>
  );
}
