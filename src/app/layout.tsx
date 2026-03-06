import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alvin Lam — Quantitative Engineering & Full-Stack Development",
  description:
    "Aspiring software engineer and quantitative developer based in the UK. Predicted 3 A*s and 1 A in Mathematics, Physics, Computer Science, and Further Mathematics. I specialize in data-driven engineering,building predictive algorithms, robust data pipelines, and high-availability systems to solve real-world financial constraints.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <main className="mx-auto w-[60%] pb-24">{children}</main>
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
