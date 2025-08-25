'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationLinks = [
    { name: 'About', href: '/about' },
    { name: 'Community', href: '/community' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Collaboration', href: '/collaboration' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 px-6 py-6 z-50 border-b border-gray-200 shadow-sm bg-[#fffff0]">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src="/assets/Ndara-academy-logo-1.png" 
            alt="NDARA Academy Logo" 
            className="h-12 sm:h-16 w-auto"
          />
        </Link>

        {/* Right side: Navigation + Button */}
        <div className="flex items-center space-x-8">
          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop Only */}
          <div className="hidden xl:block">
            <a 
              href="https://learn.ndaraacademy.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black transition-colors duration-200"
              style={{
                fontFamily: 'Raleway',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                background: '#D7FF94',
                width: '191px',
                height: '39px',
                padding: '10px 16px',
                borderRadius: '8px',
                borderLeft: '1px solid #D7FF94',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Join our Community
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src="/assets/hamburger.svg"
              alt="Menu"
              className="w-8 h-8"
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-[#d8ff94] z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-300">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img 
                src="/assets/Ndara-academy-logo-1.png" 
                alt="NDARA Academy Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-black"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8 space-y-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-black hover:text-gray-700 transition-colors duration-200 font-bold text-lg"
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="p-6">
            <button 
              className="w-full font-medium text-white transition-colors duration-200"
              style={{
                fontFamily: 'Raleway',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                background: '#000000',
                width: '100%',
                height: '48px',
                padding: '12px 16px',
                borderRadius: '8px',
                whiteSpace: 'nowrap'
              }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
