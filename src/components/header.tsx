import React from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";

interface MenuItems {
  label: string;
  href: string;
}

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const menuItems: MenuItems[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/about",
    },
    {
      label: "Portfolio",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 h-14 bg-[#1b1b1b93] backdrop-blur-xl w-full ${roboto.className}`}
    >
      <div className="w-[1850px] mx-auto flex justify-between items-center h-full">
        <Link href="/" className={`mx-2 hover:bg-[#ffffff9c] p-0.8 rounded`}>
          <img src="/gallery/logo/logo.jpg" alt="" className="p-1 w-12 h-12" />
        </Link>
        <nav className="">
          <ul className="flex ">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`mx-2 hover:bg-[#ffffff9c] p-1 rounded`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
