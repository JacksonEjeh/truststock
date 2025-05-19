import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./redux/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Truststock",
  description: "Truststock investment platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <main className="md:flex md:justify-center md:items-center md:h-screen">
            <div className="hidden md:block shadow p-10 border shadow-purple-800 rounded ">
              <p className="text-3xl text-purple-800 font-bold text-center">Tablet and Desktop view </p>
              <p className="text-4xl text-purple-800 font-bold text-center">coming soon</p>
            </div>
            <div className=" md:hidden">
            {children}
            </div>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
