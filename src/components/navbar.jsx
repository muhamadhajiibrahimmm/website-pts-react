import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#081827] text-white">
      <div className="container mx-auto p-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold mr-4">Webrofiler</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-end items-center space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/customers" className="hover:text-gray-300">
            Customers
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
        </div>

        {/* Profile and Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:ml-4"> {/* Added margin-left here */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a
            href="/"
            className="block px-4 py-2 text-white hover:bg-gray-600"
          >
            Home
          </a>
          <a
            href="/customers"
            className="block px-4 py-2 text-white hover:bg-gray-600"
          >
            Customers
          </a>
          <a
            href="/about"
            className="block px-4 py-2 text-white hover:bg-gray-600"
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

export { Navbar };
