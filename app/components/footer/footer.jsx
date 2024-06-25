export const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="text-xs w-full py-2 bg-white">
      <div className="flex place-content-between mx-auto px-8 lg:w-2/3">
        <a href="mailto: hi@vitormanoel.com ?subject=Hi, can we chat?">
          Vitor Manoel
        </a>

        <p>&copy; {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
