import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 z-20 w-full bg-secondary/25 p-4 font-bold text-black">
      <ul className="ml-4 flex space-x-4">
        <li>
          <Link
            href="/"
            className="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-secondary hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-secondary hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-secondary hover:underline"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-secondary hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
