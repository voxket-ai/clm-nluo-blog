import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NLUO Mediation Chronicle - Mediation & Negotiation Insights",
  description: "The NLUO Mediation Chronicle is a platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation, promoting accessible and practice-oriented discussions.",
  keywords: "mediation, negotiation, ADR, alternative dispute resolution, NLUO, mediation chronicle, dispute resolution, mediation act 2023",
  authors: [{ name: "NLUO Centre for Mediation and Negotiation" }],
  creator: "NLUO CMN",
  publisher: "NLUO CMN",
  icons: {
    icon: "/CMN.png",
      apple: "/CMN.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
