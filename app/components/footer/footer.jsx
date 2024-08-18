export const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="text-xs w-full py-2 px-8 lg:w-2/3 text-end">
      <p>&copy; {year}</p>
    </footer>
  );
}

export default Footer;
