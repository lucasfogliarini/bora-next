import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from './nav'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bora",
  description: "Bora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>        
      <div className="min-h-full">
        <Nav></Nav>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl p-6 sm:p-6 lg:p-8">{children}</div>
        </main>
      </div>
      </body>
    </html>
  );
}
