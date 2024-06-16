import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const StickyFooter = (): JSX.Element => {
  return (
    <footer className="bg-[#18171793] text-gray-300 py-4 mt-auto">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
          <h2 className={`text-white text-2xl font-bold ${roboto.className}`}>
            E-mail
          </h2>
          <p>Aagashnadarajah@gmail.com</p>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h3
            className={'text-white text-xl font-semibold ${roboto.className}'}
          >
            Follow Us
          </h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white ">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaBehance />
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          "text-center border-t border-gray-700 pt-4 mt-8 ${roboto.className}"
        }
      >
        <p className="mb-0">
          &copy; 2024 Aagash Nadarajah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default StickyFooter;
