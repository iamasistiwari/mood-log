import type { Metadata } from "next";
import "./globals.css";
import { Fugaz_One } from 'next/font/google';
import NavBar from "@/components/main/NavBar";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner"



const fugazOne = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mood Log",
  description: "It helps you to track your moods every day of year",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fugazOne.className}  text-slate-200 bg-black antialiased h-screen`}>
          <Providers>
            <NavBar />
            {children}
            <Toaster />
          </Providers>

      </body>
    </html>
  );
}
