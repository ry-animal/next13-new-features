import Link from "next/link";

function Header() {
  return (
    <header className="p-5 bg-blue-500">
      <div className="flex space-x-5">
        <Link className="px-2 py-1 bg-white text-blue-500 rounded-lg" href="/">
          Home
        </Link>
        <Link
          className="px-2 py-1 bg-white text-blue-500 rounded-lg"
          href="/todos"
        >
          Todos
        </Link>
        <Link
          className="px-2 py-1 bg-white text-blue-500 rounded-lg"
          href="/search"
        >
          Search
        </Link>
      </div>
    </header>
  );
}

export default Header;
