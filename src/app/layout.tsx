import type { Metadata } from "next";
import { Geist, Geist_Mono, Germania_One } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";

const one = Germania_One({
  subsets: ["latin"],
  weight: "400", // 這個字體只有 400
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "李婭紅的世界",
  description: "我的圖愛上",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={one.className}>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
