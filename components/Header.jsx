"use client";
import { useState, useEffect } from "react";

// Header component with dynamic background and menu
export default function Header({ menuItems, logo, backgroundImage }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scrolling to adjust header size
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "h-12" : "h-20"
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 50,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10" />

        {/* Navigation Menu */}
        <nav className="flex space-x-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white font-medium hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
