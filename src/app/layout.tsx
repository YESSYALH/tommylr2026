import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import KineticGrid from "@/components/KineticGrid";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tommy L. Ruff | Premium Wealth Management & Financial Strategies",
  description: "Protect your wealth, reduce taxes, and eliminate market risk with Tommy L. Ruff. Over 40 years of experience in tax-free income and estate planning.",
  keywords: ["Wealth Management", "Financial Consulting", "Tax-Free Income", "Estate Planning", "Retirement Protection"],
  openGraph: {
    title: "Tommy L. Ruff | Premium Wealth Management",
    description: "Strategies the financial industry hopes you never discover. Protect your wealth and eliminate market risk.",
    url: "https://www.tommylruff.com",
    siteName: "Tommy L. Ruff",
    images: [
      {
        url: "https://res.cloudinary.com/dr50ioh9h/image/upload/v1784923162/image_vle5mn.png",
        width: 1200,
        height: 630,
        alt: "Tommy L. Ruff Financial Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tommy L. Ruff | Premium Wealth Management",
    description: "Protect your wealth, reduce taxes, and eliminate market risk with Tommy L. Ruff.",
    images: ["https://res.cloudinary.com/dr50ioh9h/image/upload/v1784923162/image_vle5mn.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <AuthProvider>
          <KineticGrid />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
