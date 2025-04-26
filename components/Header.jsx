"use client";

import { useState, useEffect } from "react";
import Menu from "./Menu";

// Remove trailing slash if present to avoid double-slash in URLs
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
const API_BASE_URL = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;

export default function Header({ menuItems, logo }) {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/site-config/`, {
          headers: {
            'Accept': 'application/json'
          }
        });

        // Check if the response is JSON
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server is not responding with JSON. Please check if the Django server is running.");
        }

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.detail || "Failed to fetch background image");
        }
        setBackgroundImage(data.header_background);
      } catch (error) {
        console.error("Error fetching background:", error);
        setError(error.message);
      }
    };

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
