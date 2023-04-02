import { Inter } from "@next/font/google";
import "@/styles/reset.css";
import "@/styles/global.css";

import { Header, Footer } from "@/components";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
