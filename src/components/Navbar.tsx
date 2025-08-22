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
            src="/assets/ndara-logo-black.png" 
            alt="NDARA Academy Logo" 
            className="h-16 w-auto"
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
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fffff0] border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
                        {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              className="w-full font-medium text-gray-900 transition-colors duration-200"
              style={{
                fontFamily: 'Raleway',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                background: '#D7FF94',
                width: '100%',
                height: '39px',
                padding: '10px 16px',
                borderRadius: '8px',
                borderLeft: '1px solid #D7FF94',
                whiteSpace: 'nowrap'
              }}
            >
              Join our Community
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
