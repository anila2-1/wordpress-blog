import { Inter } from 'next/font/google'
import "./globals.css";
import "./template";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "NextJs Blog App",
  description: "Simple headless website...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        >
        <div className="bg-gray-100 max-w-[980px] p-4 md:p-10 mx-auto bg-background min-h-screen">
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}