import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";
import SplineContainer from "@/components/SplineContainer/SplineContainer";
import WaveBG from "@/components/WaveBG/WaveBG";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".JB Fullstack Developer Web Portfolio",
  description: "Fullstack developer web portfolio for John Bengemin Uy",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className + " box-border transform scale-100"}>
        <NavBar />
        <SplineContainer />
        {children}
        <WaveBG />
      </body>
    </html>
  );
}
