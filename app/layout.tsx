import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aliyan Dev | Give your Websites for development",
  description: "Aliyn Dev | Give your Websites for development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-medium`}>{children}</body>
    </html>
  );
}
