'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex justify-between px-4 lg:px-12 py-6 items-center shadow-xl">
      <div className="font-extrabold text-xl">Shikhar.dev</div>
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-blue hover:text-blue-dark focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white transform ${
            isMobileMenuOpen ? '' : '-translate-x-full'
          } transition-transform ease-in-out duration-300`}>
          <button
            onClick={closeMobileMenu}
            className="px-4 py-2 mt-4 bg-blue absolute right-0 text-black rounded hover:bg-blue-dark">
            <figure className="text-2xl font-medium">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
              </svg>
            </figure>
          </button>
          <div className="flex flex-col items-center py-5 space-y-5">
            <Link
              href="/"
              className="font-bold hover:text-blue cursor-pointer"
              onClick={closeMobileMenu}>
              Home
            </Link>
            <Link
              href="#about"
              className="font-bold hover:text-blue cursor-pointer"
              onClick={closeMobileMenu}>
              About
            </Link>
            <Link
              href="#experience"
              className="font-bold hover:text-blue cursor-pointer"
              onClick={closeMobileMenu}>
              Experience
            </Link>
            <Link
              href="#publications"
              className="font-bold hover:text-blue cursor-pointer"
              onClick={closeMobileMenu}>
              Publications
            </Link>
            <Link
              href="#projects"
              className="font-bold hover:text-blue cursor-pointer"
              onClick={closeMobileMenu}>
              Projects
            </Link>
            <Link
              href="#contact"
              className="font-bold hover:text-blue cursor-pointer"
              onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center space-x-5">
        <Link href="/" className="font-bold hover:text-blue cursor-pointer">
          Home
        </Link>
        <Link
          href="#about"
          className="font-bold hover:text-blue cursor-pointer">
          About
        </Link>
        <Link
          href="#experience"
          className="font-bold hover:text-blue cursor-pointer">
          Experience
        </Link>
        <Link
          href="#publications"
          className="font-bold hover:text-blue cursor-pointer">
          Publications
        </Link>
        <Link
          href="#projects"
          className="font-bold hover:text-blue cursor-pointer">
          Projects
        </Link>

        <Link
          href="#contact"
          className="font-bold hover:text-blue cursor-pointer">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
