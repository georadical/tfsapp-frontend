"use client";

import { useState, useEffect } from "react";

export default function Header({ menuItems, logo }) {
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Fetch background image from the backend
  useEffect(() => {
    async function fetchBackground() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/site-config/");
        if (!res.ok) throw new Error("Failed to fetch background image");
        const data = await res.json();
        setBackgroundImage(data.header_background); // Use the URL directly from the backend
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    }
    fetchBackground();
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to shrink the header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "h-28" : "h-64"
      }`}
      style={{
        transition: "0.4s ease-in-out",
        backgroundImage: isScrolled
        ? `linear-gradient(to bottom, #5470cd, #5470cd)`
        : `linear-gradient(to bottom, rgba(57, 81, 163, 0.45), rgba(57, 81, 163, 0.45)), url(${backgroundImage})`,
      backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 50,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <img src="/tfs-logo.png" alt="Logo" className="h-20 " />

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
