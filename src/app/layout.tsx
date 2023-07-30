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
      <body
        className={
          inter.className +
          " bg-gray-200 min-h-screen flex flex-col justify-between"
        }
      >
        <div
          id="backdrop"
          className="absolute top-0 left-0 w-full h-full bg-[url('/backgroundImg4.jpg')] blur-xs opacity-90 -z-50 bg-cover bg-center filter"
        ></div>
        <main>
          <Nav />

          <>{children}</>
        </main>
        <footer className=" flex flex-row justify-center">
          <ul className="hidden fixed bottom-20 lg:flex lg:flex-col mt-auto  mx-auto  justify-end items-center text-gray-200 space-y-1 bg-gray-600 px-7 py-5 rounded-xl w-160">
            <li>NEXT.js Rest API + AppWriteDB </li>
            <li>ChatGPT + Zustand</li>
            <li>Drag'n'Drop + HeadlessUI + Tailwind</li>
            <li>
              Learned from Sonny;{" "}
              <span className=" whitespace-nowrap ">
                Powered by greybluesea
              </span>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
