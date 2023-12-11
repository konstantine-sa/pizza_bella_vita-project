import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Pizza Bella Vita",
  description: "Website für die Lieferung von Pizza und Speisen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="flex flex-col max-w-[1460px] min-h-[100vh] mx-auto px-56 py-4">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
