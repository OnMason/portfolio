import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranav Rao | Hardware Engineer",
  description:
    "Hardware engineer working on RTL, embedded systems, and circuit design. UC Irvine EE student building FPGA cores, embedded firmware, and PCBs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}
