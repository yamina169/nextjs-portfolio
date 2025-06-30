import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Yamina Portfolio",
  description: "Software Engineering Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` `}>{children}</body>
    </html>
  );
}
