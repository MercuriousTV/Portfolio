import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-24 flex items-center w-full">
      <div className="flex justify-between items-center w-full">
        <div>
          <h2>LOGO HERE</h2>
        </div>

        <nav>
          <ul className="flex ">
            <li className="mx-2">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2">
              <Link href="/about">About me</Link>
            </li>
            <li className="mx-2">Projects</li>
            <li className="mx-2">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
