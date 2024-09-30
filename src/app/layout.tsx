import type { Metadata } from "next";
import "./globals.css";
import { Parallax_Provider } from "@/Components/Client/Provider_Parallax";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/Components/Client/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/Components/Server/Footer"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Khizer hussain",
  description: "personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="overflow-x-hidden">
          <Parallax_Provider>{children}</Parallax_Provider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
