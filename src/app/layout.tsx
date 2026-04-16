import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fullsize | Frontend Developer & Data Visualization Expert",
  description: "Frontend Developer specializing in React, Vue, and Data Visualization with D3.js, ECharts, and Three.js",
  keywords: ["Frontend", "React", "Vue", "Data Visualization", "D3.js", "ECharts"],
  authors: [{ name: "Fullsize" }],
  openGraph: {
    title: "Fullsize | Frontend Developer",
    description: "Frontend Developer & Data Visualization Expert",
    url: "https://fullsize.online",
    siteName: "Fullsize Portfolio",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d1117] text-[#c9d1d9]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
