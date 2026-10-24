import { useState } from "react";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-700 rounded-lg flex items-center justify-center">
              <i className="fas fa-heartbeat text-white text-lg"></i>
            </div>
            <div>
              <h1 className={`text-xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>
                Sialkot<span className="text-teal-500">Surgical</span>
              </h1>
              <p className={`text-xs ${scrolled ? "text-gray-500" : "text-gray-300"}`}>
                Import & Export Co.
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-teal-600/25"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-teal-600 text-white px-4 py-2.5 rounded-lg font-semibold"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
