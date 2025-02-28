"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default function LegalSection() {
  const [legalData, setLegalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    text: '',
    url: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/legal-section/`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch legal data: ${response.status}`);
        }
        const result = await response.json();
        setLegalData(result);
      } catch (err) {
        console.error('Error fetching legal data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = (type) => {
    if (!legalData) return;
    
    if (type === 'privacy') {
      setModalContent({
        title: 'Privacy Policy',
        text: legalData.privacy_policy_text,
        url: legalData.privacy_policy_url
      });
    } else if (type === 'terms') {
      setModalContent({
        title: 'Terms & Conditions',
        text: legalData.terms_text,
        url: legalData.terms_url
      });
    }
    
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return (
      <div className="py-4 text-sm text-gray-600">
        Loading legal information...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-4 text-sm text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-8 py-6 border-t border-gray-200 text-sm text-gray-600">
      {legalData && (
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <p>{legalData.company_disclaimer}</p>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => openModal('privacy')}
              className="text-primary-light hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => openModal('terms')}
              className="text-primary-light hover:text-primary transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {modalContent.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {modalContent.text}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    
                    <a
                      href={modalContent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      Read More
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
