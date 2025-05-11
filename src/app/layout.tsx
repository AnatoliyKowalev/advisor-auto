import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppLayout from "@/components/layouts/app-layout";
import Head from "next/head";

import "../../public/icons/style.css";
import "@/resources/styles/main.css";
import "./globals.css";

const interSans = Inter({
  weight: ["400"],
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AdvisorAuto - Імпорт авто з Південної Кореї та Європи",
  description:
    "AdvisorAuto - компанія, що займається імпортом автомобілів з Південної Кореї та Норвегії. Рейтинг ⭐⭐⭐⭐⭐ 4.9 у Google на основі 284 відгуків",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
          as="style"
        />
        <link
          rel="preload"
          as="image"
          href="/img/kia.webp"
          imageSrcSet="/_next/image?url=%2Fimg%2Fkia.webp&w=640&q=75 640w, /_next/image?url=%2Fimg%2Fkia.webp&w=1200&q=75 1200w, /_next/image?url=%2Fimg%2Fkia.webp&w=1920&q=75 1920w"
          imageSizes="(max-width: 1000px) 1200px"
        />
      </Head>
      <html lang="en">
        <body
          className={`${interSans.variable} text-foreground antialiased light`}
          style={{
            overflow: "visible!important",
          }}
        >
          <AppLayout>{children}</AppLayout>
        </body>
      </html>
    </>
  );
}
