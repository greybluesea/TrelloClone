import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Modal from "@/components/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trello Clone",
  description: "Next.js GPT-4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-200"}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/backgroundImg4.jpg')] blur-sm opacity-90 -z-50 bg-cover bg-center filter"></div>
        <Nav />
        {children}
      </body>
    </html>
  );
}
