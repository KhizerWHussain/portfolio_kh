import type { Metadata } from "next";
import "./globals.css";
import { Parallax_Provider } from "@/Components/Client/Provider_Parallax";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Footer = dynamic(() => import("@/Components/Server/Footer"));
import Header from "@/Components/Client/Header";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

interface RootLayoutProp {
  children: ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProp>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <Parallax_Provider>
          <main className="overflow-hidden">{children} </main>
        </Parallax_Provider>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
