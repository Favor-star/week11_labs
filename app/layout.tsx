import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InsightEdge",
  description: "Post manager app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full max-w-screen h-full `}
      >
        <main className="w-full mx-auto max-w-screen-xl px-4">
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
