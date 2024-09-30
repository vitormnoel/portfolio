export const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="lg:fixed bottom-2 right-0 left-0 text-xs py-2 w-full">
      <p className="text-end px-8 container m-auto">&copy; {year}</p>
    </footer>
  );
}

export default Footer;
