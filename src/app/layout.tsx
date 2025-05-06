import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import AppLayout from "@/components/layouts/app-layout";

import "../../public/icons/style.css";
import "@/resources/styles/main.css";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${interSans.variable} ${interTight.variable} text-foreground antialiased light`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
