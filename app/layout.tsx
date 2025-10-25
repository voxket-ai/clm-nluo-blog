import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CLM Blog - Corporate Law Insights & Analysis",
  description: "Your premier destination for corporate law insights, analysis, and commentary. Stay updated with the latest developments in corporate legal matters.",
  keywords: "corporate law, legal analysis, legal insights, law blog, corporate governance, securities law, merger acquisition",
  authors: [{ name: "Centre for Corporate Law - National Law University Odisha" }],
  creator: "CLM NLUO",
  publisher: "CLM NLUO"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
