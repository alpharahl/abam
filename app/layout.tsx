import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "A Better Addon Manager",
  description: "Branch, Commit, Sync, and Share your addon configuration.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} text-white dark:bg-slate-900`}>
    <Providers>{children}</Providers>
    </body>
    </html>
  );
}
