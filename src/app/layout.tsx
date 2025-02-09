import type { Metadata } from "next";
import "./globals.css";
import { Parallax_Provider } from "@/Components/Provider_Parallax";
import { ReactNode, lazy, Suspense } from "react";

const Footer = lazy(() => import("@/Components/Footer"));
const Header = lazy(() => import("@/Components/Header"));

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  adjustFontFallback: true,
  preload: true,
});

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
  category: "Web",
  keywords: ["portfolio", "web", "nextjs", "tailwindcss"],
  //
};

interface RootLayoutProp {
  children: ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProp>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        <Parallax_Provider>
          <main className="overflow-hidden">{children} </main>
        </Parallax_Provider>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

export default RootLayout;
