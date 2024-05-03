import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const myFont = localFont({
  src: "../fonts/BalooBhaijaan2-Bold.ttf",
  variable: "--font-variable",
});

export const metadata: Metadata = {
  title: "Bahaa Aldein",
  description:
    "Welcome to Bahaa Aldein's portfolio, where MERN stack expertise meets creative innovation.",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}
