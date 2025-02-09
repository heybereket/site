import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bereket semagn",
  description: "bereket semagn's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-['Times_New_Roman']"
      >
        {children}
      </body>
    </html>
  );
}
