'use client';

import Link from 'next/link'
import Logo from "@/app/components/logo"
import MenuIcon from '@/app/icons/menu.svg';
import clsx from 'clsx';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/dashboard' },
  { name: 'About', href: '/about' },
  { name: 'Service', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

function NavLinks({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={clsx(
      "md:flex w-full md:justify-between items-center",
      { 'hidden': !isOpen, }
    )} id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {links.map((link) => {
          return (
            <li
              key={link.name}
              className='my-1'
            >
              <Link
                href={link.href}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className='my-5 flex'>
        <Link href="#" className="mx-auto text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</Link>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-col md:flex-row  items-center justify-between mx-auto p-4 py-0">
        <div className='w-full flex justify-between items-center'>
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo />
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon />
          </button>
        </div>
        <NavLinks isOpen={isOpen} />
      </div>
    </nav>

  );
}
