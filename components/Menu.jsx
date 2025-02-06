"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Menu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Manejar el scroll para cambiar estilos
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center space-x-8">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white font-medium text-sm tracking-wide hover:text-white/80 transition-colors duration-200 py-2"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-primary transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button in overlay */}
        <button 
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="text-center">
                <a
                  href={item.href}
                  className="text-white text-2xl font-medium hover:text-white/80 transition-colors duration-200 block py-2"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
