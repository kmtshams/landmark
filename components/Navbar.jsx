'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setShow(false)
        setIsMenuOpen(false) // Close menu when scrolling down
      } else {
        setShow(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-black/20 backdrop-blur-sm w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center max-w-7xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-white tracking-wide uppercase ">
              Landmark<sup>®</sup>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block text-lg">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/properties" 
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
              >
                Properties
              </Link>
              <Link 
                href="/cities" 
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
              >
                Cities
              </Link>
              <Link 
                href="/staging" 
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
              >
                Staging
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[rgba(0,0,0,0.3)]">
              <Link
                href="/properties"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                href="/cities"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Cities
              </Link>
              <Link
                href="/for-business"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Staging
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 block px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 