"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {

  return (
    <Link
      href={href}
      className="relative group mx-3 px-1 py-2 text-gray-600 font-semibold hover:text-green-700 transition-colors block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
    >
      {children}
      <motion.span
        className="absolute -bottom-2 left-1/2 h-0.5 bg-indigo-500"
        initial={{ width: 0, x: '-50%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/finance logo.jpg"
                alt="Company Logo"
                width={400}
                height={100}
                
                priority
                className="h-16 w-auto bg-white"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/loans">Loans</NavLink>
            <NavLink href="/about">About Us</NavLink>
        
            <NavLink href="/contact">Contact us</NavLink>

            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-indigo-50 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-indigo-50 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-indigo-50 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-indigo-50 transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-indigo-50 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;