import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ScrollProgress } from "@/components/scroll-progress";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Seven Hills English Medium School",
  description:
    "Bright, balanced, and future-ready learning at Seven Hills English Medium School in Surat, Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--fg)]">
        <RouteScrollReset />
        <ScrollProgress />
        <div className="min-h-screen">
          <Navbar />
          <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
