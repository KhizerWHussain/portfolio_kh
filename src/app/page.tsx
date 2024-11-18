import Base from "@/Components/Base";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khizer Hussain - Portfolio",
  description:
    "Welcome to my portfolio website. I am a web developer passionate about building great user experiences.",
  applicationName: "Khizer Hussain - Portfolio",
  authors: [
    { name: "Khizer Hussain", url: "https://github.com/KhizerWHussain" },
  ],
  creator: "Khizer Hussain",
  openGraph: {
    type: "website",
    countryName: "Pakistan",
    description:
      "Welcome to my portfolio website. I am a web developer passionate about building great user experiences.",
    emails: ["khizwaseem@gmail.com"],
    title: "Khizer Hussain - Portfolio",
    url: "https://khizerhussain.vercel.app/",
    siteName: "Khizer Hussain - Porfolio",
    phoneNumbers: ["+923100024241"],
  },
  publisher: "Vercel",
};

export default function Home() {
  return <Base />;
}
