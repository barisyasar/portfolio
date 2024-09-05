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
  title: "Barış Yaşar - My Portfolio as a Mid Level Full-Stack Developer",
  description:
    "Everything you need to know about Barış Yaşar's developer skills and experiences.",
  alternates: {
    canonical: "https://barisyasar.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-black text-white"}>
        <MeshGradientBackground />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
