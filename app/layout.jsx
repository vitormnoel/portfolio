import "./style/globals.css";

import Footer from "./components/footer/footer.jsx";
import NavBar from "./components/header/navbar.jsx";

export const metadata = {
  metadataBase: new URL("https://vitormanoel.com"),
  title: {
    default: "Vitor Manoel",
    template: "%s | Vitor Manoel",
  },
  description:
    "Software Engineer specialized in Web Development using React, Next.js, and Flutter. Experienced with multinationals, and small companies.",
  keywords:
    "vitor manoel, software engineer, web developer, react, next.js, vitormanoel, vitormnoel, vitor, vtormnoel, manoel",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>",
  url: "https://vitormanoel.com",
  openGraph: {
    images: [
      {
        url: "/assets/images/profile.jpg",
        width: 600,
        height: 600,
        alt: "Vitor Manoel's profile picture",
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function rootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className="font-Urbanist font-light overscroll-contain">
        <NavBar />
        <main className="container mx-auto px-8 lg:w-2/3] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
