import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { inter, merriweather, roboto, playfairDisplay } from "@/utils/fonts";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfairDisplay.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
