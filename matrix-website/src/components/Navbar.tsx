"use client"
import Link from 'next/link'
import { useState } from 'react'

/** Navigation bar component with mobile menu */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/ai-agent-stack', label: 'AI Agent Stack' },
    { href: '/industries', label: 'Industries' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">Matrix</Link>
        <button
          className="md:hidden p-2" aria-label="Toggle menu" onClick={toggle}
        >
          Menu
        </button>
        <ul className="hidden md:flex space-x-4" role="menubar">
          {links.map((l) => (
            <li key={l.href} role="none">
              <Link
                href={l.href}
                role="menuitem"
                className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-purple-600 after:w-full after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul
        className={`md:hidden px-4 pb-4 space-y-2 transition-all overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}
        role="menubar"
        aria-hidden={!open}
      >
        {links.map((l) => (
          <li key={l.href} role="none">
            <Link
              href={l.href}
              role="menuitem"
              className="block py-1 hover:underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
