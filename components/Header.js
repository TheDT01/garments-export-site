"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/rfq", label: "RFQ" },
    { href: "/estimator", label: "Estimator" },
    { href: "/library", label: "Library" },
    { href: "/gallery", label: "Pictures" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <img
            src="/logos/logo.png"
            alt="Sapphire Design LTD logo"
            className="h-12 w-auto"
          />
          <span className="text-lg font-bold tracking-wider text-gray-900">
            Sapphire Design LTD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${
                  isActive
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 rounded transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/"
            aria-label="WhatsApp"
            className="rounded-xl border border-gray-300 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm transition hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
          >
            WhatsApp
          </a>
          <Link
            href="/rfq"
            className="rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:scale-105"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-md p-2 hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          >
            <ul className="flex flex-col gap-4 p-6 text-gray-800 font-medium">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-2 py-2 rounded transition ${
                        isActive
                          ? "text-blue-700 font-semibold bg-blue-50"
                          : "hover:bg-blue-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 border-t">
                <a
                  href="https://wa.me/01315849244"
                  aria-label="WhatsApp"
                  className="block rounded-md border border-gray-300 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm transition hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href="/rfq"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg hover:scale-105"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
