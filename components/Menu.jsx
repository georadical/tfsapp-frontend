"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Our Services', id: 'services' },
    { label: 'Our Expertise', id: 'expertise' },
    { label: 'Statements', id: 'statements' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = menuItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element);

      // Si estamos cerca del final de la página, activar la sección de contacto
      const nearBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 50;
      
      if (nearBottom) {
        setActiveSection('contact');
        return;
      }

      // Encontrar la sección más cercana al viewport
      let currentSection = null;
      let minDistance = Infinity;

      sections.forEach(section => {
        const rect = section.element.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar una vez al inicio
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative z-50">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
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
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-white font-medium text-sm tracking-wide hover:text-white/80 transition-colors duration-200 py-2 ${
              activeSection === item.id ? 'border-b-2 border-white' : ''
            }`}
          >
            {item.label}
          </button>
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
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="space-y-6">
            {menuItems.map((item) => (
              <div key={item.id} className="text-center">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white text-2xl font-medium hover:text-white/80 transition-colors duration-200 block py-2 ${
                    activeSection === item.id ? 'border-b-2 border-white' : ''
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
