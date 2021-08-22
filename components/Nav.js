import Link from "next/link";

export default function Nav() {
  return (
    <nav className="px-24 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 bg-transparent sm:items-baseline w-full top-0 z-40 absolute">
      <div className="mb-2 sm:mb-0">
        <Link href="/users/list">
          <a className="text-4xl no-underline text-grey-darkest hover:text-blue-dark text-white font-fancy">
            Fluido
          </a>
        </Link>
      </div>
      <div>
        <Link href="/users/list">
          <a className="text-sm no-underline text-grey-darkest hover:text-blue-dark ml-4 md:mx-10 text-white shadow py-1 px-4 rounded bg-black bg-opacity-20">
            About
          </a>
        </Link>

        <Link href="/users/list">
          <a className="text-sm no-underline text-grey-darkest hover:text-blue-dark ml-4 md:mx-10 text-white">
            Services
          </a>
        </Link>

        <Link href="/users/list">
          <a className="text-sm no-underline text-grey-darkest hover:text-blue-dark ml-4 md:mx-10 text-white">
            Contact
          </a>
        </Link>

        <Link href="/users/list">
          <a className="no-underline">
            <button className="bg-white hover:bg-black hover:text-white font-bold py-2 px-4 rounded-full w-24 text-purple-700	ml-2 text-xs">
              LogIn
            </button>
          </a>
        </Link>
      </div>
    </nav>
  );
}
