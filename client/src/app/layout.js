import { Urbanist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Hello Bundle - Parental Leave Support",
  description: "Supporting parents through their parental leave journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-urbanist`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
