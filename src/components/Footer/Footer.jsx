import React from "react";

// Footer.js
export default function Footer() {
  return (
    <footer className="bg-orange-500 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo and Signup */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">PurePaw Care</h2>
          <p className="mt-2 text-sm">
            Sign-Up for Vet-Approved Health Tips, Giveaways, and More
          </p>
          <div className="mt-4 flex justify-center md:justify-start">
            <form action="https://getform.io/f/alljomwa" method="POST">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 rounded-l-lg text-gray-800 focus:outline-none w-60"
              />
              <button className="bg-white text-orange-500 p-2 rounded-r-lg">
                ➔
              </button>
            </form>
          </div>
          <p className="mt-2 text-xs">
            By signing up you agree on our{" "}
            <a href="/terms-condition" className="underline">
              Terms & Condition
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto text-sm space-x-6 md:space-x-12 text-center md:text-left">
          {/* Products */}
          <div>
            <h3 className="font-bold mb-2">Products</h3>
            <ul className="space-y-1">
              <li>
                <a href="/coming-soon">Skin Health</a>
              </li>
              <li>
                <a href="/coming-soon">Quality Of Life</a>
              </li>
              <li>
                <a href="/coming-soon">Vaccines</a>
              </li>
              <li>
                <a href="/coming-soon">Treats</a>
              </li>
              <li>
                <a href="/coming-soon">All Products</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="/coming-soon">Our Blogs</a>
              </li>
              <li>
                <a href="/coming-soon">Pet Care Video</a>
              </li>
              <li>
                <a href="/coming-soon">Downloadables</a>
              </li>
              <li>
                <a href="/coming-soon">Pet Mental Health</a>
              </li>
              <li>
                <a href="/coming-soon">Search</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="/#about-us">About</a>
              </li>
              <li>
                <a href="/coming-soon">Why Pure Paw Care</a>
              </li>
              <li>
                <a href="/coming-soon">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
