import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdminNavbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LAMYAI",
  icons: {
    icon: "/logo.png",
  },
  description: "Portfolio and travel website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-sm:pb-14`}
      >
        {children}
        {/* <AdminNavbar /> */}
      </body>
    </html>
  );
}
