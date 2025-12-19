import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helena Agustsson Dev",
  description: "Portfolio website for Helena Agustsson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}