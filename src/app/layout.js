import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Pizza Bella Vita",
  description: "Website für die Lieferung von Pizza und Speisen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-[1460px] mx-auto px-56 py-4">{children}</main>
      </body>
    </html>
  );
}
