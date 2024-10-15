import Link from "next/link";

export default function Custom404() {
  return (
    <div className="cursor-default h-[100vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl mb-2">404</h1>
      <h2>page doesn't exist</h2>
      <Link href="/" className="mt-6 border-2 py-1 px-4 hover:text-green-dark hover:border-green-dark duration-300">home</Link>
    </div>
  );
}

//  Custom404;
