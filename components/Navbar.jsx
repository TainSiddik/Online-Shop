"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdFilterList, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="block sticky top-0 z-50 bg-white lg:flex justify-between items-center border border-slate-500 py-1 px-6 w-full lg:py-2">
      <div className="logo-btn flex justify-between w-full lg:w-1/2">
        <div className="logo flex items-center">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="logo"
            className="lg:w-[120px] lg:h-[80px] object-fill"
          />
        </div>
        <div className="btn flex items-center lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose className="size-8" />
            ) : (
              <MdFilterList className="size-8" />
            )}
          </button>
        </div>
      </div>
      <div className="listMenu lg:flex">
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } text-center space-y-3 my-4 lg:space-y-0 lg:my-0 lg:flex lg:items-center lg:gap-12`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
          <li className="mt-7 lg:mt-0">
            <Link
              href="/auth/login"
              className="bg-slate-700 border-2 rounded-md text-white text-center px-6 py-2 hover:bg-slate-900"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
