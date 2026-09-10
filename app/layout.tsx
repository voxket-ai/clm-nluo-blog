import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import AdminMount from "@/components/editable/AdminMount";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Reading face for article bodies — keeps long-form legal prose comfortable.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NLUO Mediation Blogs - Mediation & Negotiation Insights",
  description: "The NLUO Mediation Blogs is a platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation, promoting accessible and practice-oriented discussions.",
  keywords: "mediation, negotiation, ADR, alternative dispute resolution, NLUO, mediation blogs, dispute resolution, mediation act 2023",
  authors: [{ name: "NLUO Centre for Mediation and Negotiation" }],
  creator: "NLUO CMN",
  publisher: "NLUO CMN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.variable} ${newsreader.variable} font-sans antialiased bg-slate-50 text-gray-900`}
      >
        <AdminMount>{children}</AdminMount>
      </body>
    </html>
  );
}
