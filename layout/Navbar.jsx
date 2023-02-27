import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="h-20 w-full flex items-center justify-between px-14 border-b border-gray-800">
        <Link href="/">
          <h1 className="text-4xl font-medium text-textColor-main">Product.</h1>
        </Link>
        <ul className="list_items flex space-x-6 text-lg text-textColor-main">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
