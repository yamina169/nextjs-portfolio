import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " className="scroll-smooth">
      <body className={` `}>{children}</body>
    </html>
  );
}
