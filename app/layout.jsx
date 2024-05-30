import "./style/globals.css";

import Footer from "./components/footer/footer.jsx";
import NavBar from "./components/header/navbar.jsx";

export const metadata = {
  title: {
    default: "Vitor Manoel",
    template: "%s | Vitor Manoel",
  },
  description:
    "Software Engineer specialized in Web Development using React, Next.js, and Angular. Experienced with startups, multinationals, and small companies. Do you have an open position? Let`s talk!",
  keywords:
    "vitor manoel, software engineer, web developer, react, next.js, vitormanoel, vitormnoel, vitor, vtormnoel, manoel",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>",
  url: "https://vitormanoel.com",
  openGraph: {
    images: ''
  }
};

export default function rootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Urbanist font-light overscroll-contain dark:bg-neutral-900 dark:text-slate-300">
        <NavBar />
        <main className="container mx-auto px-8 lg:w-2/3] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
