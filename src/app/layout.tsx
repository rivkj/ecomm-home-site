import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumière Luxe & Co.",
  description: "Blending elegance and sustainability under the luminescent umbrella of LL & Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="p-4 max-w-7xl m-auto min-w-[300px]">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
