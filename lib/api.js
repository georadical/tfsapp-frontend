/**
 * API Configuration File
 *
 * This file centralizes all API endpoint definitions to ensure consistency
 * across the application and make it easier to update URLs when needed.
 */

// Base API URL with fallback to localhost if environment variable is not set
export const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Services
  SERVICES: `${API_BASE}/services/`,
  
  // Hero Section
  HERO_SECTION: `${API_BASE}/hero-section/`,
  
  // Footer Components
  FOOTER_CTA: `${API_BASE}/footer-cta/`,
  LEGAL_SECTION: `${API_BASE}/legal-section/`,
};

/**
 * Generic fetch function with error handling
 * @param {string} url - The API endpoint URL
 * @param {Object} options - Fetch options
 * @returns {Promise} - Response data or error
 */
export async function fetchFromAPI(url, options = {}) {
  try {
    // Set default headers if not provided
    const headers = options.headers || {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Check if the response is JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server is not responding with JSON. Please check if the API server is running.");
    }

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.detail || `API error: ${response.status}`);
    }
    
    return data;
  } catch (error) {
    console.error(`API fetch error for ${url}:`, error);
    throw error;
  }
}
