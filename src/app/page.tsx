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

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Services />
    </>
  );
}
