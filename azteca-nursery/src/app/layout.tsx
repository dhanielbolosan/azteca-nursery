import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopNavbar from "@/components/TopNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azteca Nursery",
  description: "Locally grown plants on Maui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}
