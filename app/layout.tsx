import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber/Navber";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navber />
        {children}
        </body>
    </html>
  );
}
