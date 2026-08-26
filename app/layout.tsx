import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "ชื่อเว็บ Web name....",
  description: "คำบรรยาย รายละเอียดเว็บ Web description....",
  keywords: ["คำค้นหา Keyword 1", "คำค้นหา Keyword 2", "คำค้นหา Keyword 3"],
  authors: [{ 
    name: "ชื่อผู้แต่ง Author name....", 
    url: "https://www.example.com" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kanit.className}`}
    >
      <body className="min-h-full flex flex-col">
        <h1 className="text-center text-blue-600 font-bold">WELCOME TO SAU</h1>
        <hr />
        {children}
        </body>
    </html>
  );
}
