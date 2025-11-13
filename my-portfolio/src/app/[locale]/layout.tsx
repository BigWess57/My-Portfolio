import type { Metadata } from "next";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';

// import { Geist, Geist_Mono } from "next/font/google";
import { inter, /*merriweather, roboto, playfairDisplay,*/ jetbrainsMono } from "@/utils/fonts";
import "./globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
export async function generateMetadata(props: Omit<LayoutProps<'/[locale]'>, 'children'>) {
  const {locale} = await props.params;
  const t = await getTranslations({locale, namespace: 'metadata'});
 
  return {
    title: t('title')
  };
}

// export const metadata: Metadata = {
//   title: "My Portfolio",
//   description: "My portfolio website",
// };

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};


export default async function RootLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
