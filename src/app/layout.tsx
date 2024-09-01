import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import MeshGradientBackground from "@/components/MeshGradientBackground";
import Header from "@/components/Header";

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barış Yaşar Portfolio as a Mid Level Full-Stack Developer",
  description:
    "Everything you need to know about my developer skills and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-black text-white"}>
        {/* <div className="w-px bg-red-900 h-screen fixed z-10 left-1/2 top-0 transform -translate-x-1/2" /> */}
        <MeshGradientBackground />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
