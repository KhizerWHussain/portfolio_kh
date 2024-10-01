import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("@/Components/Client/Hero"), {
  ssr: false,
});
const AboutMe = dynamic(() => import("@/Components/Server/About"), {
  ssr: false,
});
const Services = dynamic(() => import("@/Components/Server/Service"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/Components/Client/Contact"), {
  ssr: false,
});

// console.log("hoem page")

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Services />
      <Contact />
    </>
  );
}
