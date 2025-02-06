"use client";

import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Services from "../components/Services";
import DefaultFeatureList from "../components/DefaultFeatureList";

const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function Home() {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#services" },
    { label: "Our Expertise", href: "#expertise" },
    { label: "Statements", href: "#statements" },
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
        <Hero />
        <Services />
        <DefaultFeatureList />
        {/* Otras secciones */}
      </main>
    </>
  );
}
