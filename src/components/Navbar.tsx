"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "~/home" },
  { href: "/projects", label: "~/projects" },
  { href: "/about", label: "~/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#30363d] bg-[#0d1117]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#39ff14] font-mono text-lg font-bold group-hover:glow-green transition-all">
              &gt;_
            </span>
            <span className="font-mono text-sm text-[#c9d1d9]">
              fullsize
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-mono text-sm text-[#8b949e] hover:text-[#39ff14] hover:bg-[#161b22] rounded-md transition-all"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/Fullsize"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 font-mono text-sm bg-[#161b22] border border-[#30363d] rounded-md hover:border-[#39ff14] hover:text-[#39ff14] transition-all"
            >
              GitHub →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#8b949e] hover:text-[#39ff14]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#30363d]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 font-mono text-sm text-[#8b949e] hover:text-[#39ff14] hover:bg-[#161b22] rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
