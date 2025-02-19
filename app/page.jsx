"use client";

import { useEffect } from 'react';
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Services from "../components/Services";
import DefaultFeatureList from "../components/DefaultFeatureList";
import CapabilityStatement from "../components/CapabilityStatement";
import ValuesSection from "../components/ValuesSection";

const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Asegurarse de que la página empiece desde arriba
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20">
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="expertise">
          <DefaultFeatureList />
        </div>
        <div id="statements">
          <CapabilityStatement />
          <ValuesSection />
        </div>
        <div id="contact">
          {/* Contact section will be added here */}
        </div>
        {/* Otras secciones */}
      </main>
    </>
  );
}
