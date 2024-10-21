"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // For Hamburger and Close Icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white w-full flex items-center justify-between px-4 py-2 shadow-md">
      <nav className="container px-4 py-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-orange-500 flex items-center"
        >
          <Image src="/purepawlogo.png" alt="logo" width={150} height={150} />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {menuOpen ? (
              <FiX className="w-6 h-6" /> // Close Icon
            ) : (
              <FiMenu className="w-6 h-6" /> // Hamburger Menu Icon
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/coming-soon"
            className="text-gray-600 hover:text-gray-900"
          >
            Food for Dog
          </Link>
          <Link
            href="/coming-soon"
            className="text-gray-600 hover:text-gray-900"
          >
            Pet Accessories
          </Link>
          <Link
            href="/coming-soon"
            className="text-gray-600 hover:text-gray-900"
          >
            Shop
          </Link>
          <Link
            href="/coming-soon"
            className="text-gray-600 hover:text-gray-900"
          >
            Blogs
          </Link>
          <a href="/enquire-now">
            {" "}
            <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
              Enquire Now
            </button>
          </a>
        </div>

        {/* Cart and Sign in for Desktop */}
        {/* <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/coming-soon"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <FaShoppingCart className="mr-1" />
            Cart
          </Link>
          <Link
            href="/coming-soon"
            className="text-gray-600 hover:text-gray-900"
          >
            Sign in
          </Link>
        </div> */}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link
              href="/coming-soon"
              className="text-gray-600 hover:text-gray-900 w-full"
              onClick={toggleMenu}
            >
              Food for Dog
            </Link>
            <Link
              href="/coming-soon"
              className="text-gray-600 hover:text-gray-900 w-full"
              onClick={toggleMenu}
            >
              Pet Accessories
            </Link>
            <Link
              href="/coming-soon"
              className="text-gray-600 hover:text-gray-900 w-full"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              href="/coming-soon"
              className="text-gray-600 hover:text-gray-900 w-full"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              href="/coming-soon"
              className="text-gray-600 hover:text-gray-900 w-full"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            {/* <Link
              href="/coming-soon"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2 w-full"
              onClick={toggleMenu}
            >
              <FaShoppingCart className="mr-1" />
              Cart
            </Link>
            <Link
              href="/coming-soon"
              className="text-gray-600 hover:text-gray-900 w-full"
              onClick={toggleMenu}
            >
              Sign in
            </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
