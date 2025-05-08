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
      </Head>
      <html lang="en">
        <body
          className={`${interSans.variable} text-foreground antialiased light`}
        >
          <AppLayout>{children}</AppLayout>
        </body>
      </html>
    </>
  );
}
