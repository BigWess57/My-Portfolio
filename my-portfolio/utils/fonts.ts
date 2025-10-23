import { Inter, Merriweather, Roboto, Playfair_Display } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],        // pick the weights you need
  variable: "--font-inter",     // this CSS variable will be injected
  display: "swap",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const roboto = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],        // pick the weights you need
  variable: "--font-roboto",     // this CSS variable will be injected
  display: "swap",
});

export const playfairDisplay = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});
