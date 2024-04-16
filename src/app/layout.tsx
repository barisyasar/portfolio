import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import MeshGradientBackground from "@/components/MeshGradientBackground";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barış Yaşar",
  description:
    "Everything you need to know about me as a Full-Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-gray-100 text-neutral-950"}>
        {/* <div className="w-px bg-red-900 h-screen fixed z-10 left-1/2 top-0 transform -translate-x-1/2" /> */}
        <MeshGradientBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
