"use client";

import { useEffect } from 'react';

export default function DOMIntegrityCheck() {
  useEffect(() => {
    // Verificar integridad del DOM en desarrollo
    if (process.env.NODE_ENV === 'development') {
      const originalHTML = document.documentElement.outerHTML;
      
      const observer = new MutationObserver(() => {
        if (document.documentElement.outerHTML !== originalHTML) {
          console.warn('DOM modificado por extensiones del navegador. Prueba en modo incógnito o deshabilita extensiones.');
        }
      });

      observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true
      });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}
