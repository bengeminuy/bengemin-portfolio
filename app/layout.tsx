import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import GridBG from "@/components/GridBG";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className + " box-border transform scale-100"}>
        {children}
        <GridBG />
      </body>
    </html>
  );
}
