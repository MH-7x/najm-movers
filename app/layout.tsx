import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Movers and Packers in Dubai | Najm Al Dhahabih Furniture Movers",
    template: "%s | Najm Al Dhahabih Furniture Movers",
  },
  description:
    "Looking for trusted movers and packers in Dubai? Najm Al Dhahabih offers house, villa, office & furniture moving services across UAE. Call +971-55-4495331 for a free quote.",
  metadataBase: new URL("https://najmaldhahbih.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
