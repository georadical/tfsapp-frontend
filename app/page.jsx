"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function Home() {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <Header
        menuItems={menuItems}
        logo="/path-to-logo.png"
        backgroundImage="/path-to-background.jpg"
      />
      <main className="pt-20">
        {/* Rest of the page content */}
      </main>
    </>
  );
}

