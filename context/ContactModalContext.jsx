"use client";

import React, { createContext, useState, useContext } from 'react';
import ContactModal from '../components/ContactModal';

// Create context
const ContactModalContext = createContext();

// Create provider component
export function ContactModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
}

// Create custom hook to use the contact modal context
export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}
