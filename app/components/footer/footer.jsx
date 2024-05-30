import { metadata } from "../../layout";

export const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="text-xs w-full py-2 bg-white dark:bg-neutral-900 dark:text-slate-300">
      <div className="flex place-content-between mx-auto px-8 lg:w-2/3">
        <a href="mailto: hi@vitormanoel.com ?subject=Hi, can we chat?">
          {metadata.title.default}
        </a>

        <p>&copy; {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
