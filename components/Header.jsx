"use client";

import { useState, useEffect } from "react";
import Menu from "./Menu";

export default function Header({ menuItems, logo }) {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fetch background image from the backend
  useEffect(() => {
    async function fetchBackground() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/site-config/");
        if (!res.ok) throw new Error("Failed to fetch background image");
        const data = await res.json();
        setBackgroundImage(data.header_background);
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    }
    fetchBackground();
  }, []);

  // Handle scroll to shrink the header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "h-24" : "h-48"
      }`}
      style={{
        transition: "0.4s ease-in-out",
        backgroundImage: isScrolled
        ? `linear-gradient(to bottom, #5470cd, #5470cd)`
        : `linear-gradient(to bottom, rgba(57, 81, 163, 0.45), rgba(57, 81, 163, 0.45)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 40,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <img 
          src="/tfs-logo.png" 
          alt="Logo" 
          className={`transition-all duration-300 ${
            isScrolled ? "h-16 my-2" : "h-20"
          }`}
        />

        {/* Menu Component */}
        <Menu items={menuItems} />
      </div>
    </header>
  );
}
