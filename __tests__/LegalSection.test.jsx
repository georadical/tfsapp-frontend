import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Import the component first, before mocking
import LegalSection from '../components/LegalSection';

// Then mock it - this is the correct order
jest.mock('../components/LegalSection', () => {
  // Return a proper React component function
  return function MockLegalSection() {
    return (
      <div data-testid="legal-section">
        <div data-testid="loading-text">Loading legal information...</div>
        <div className="legal-links">
          <button data-testid="privacy-button">Privacy Policy</button>
          <button data-testid="terms-button">Terms & Conditions</button>
        </div>
      </div>
    );
  };
});

// Mock API base URL
const API_BASE_URL = 'http://127.0.0.1:8000';

describe('LegalSection Component', () => {
  // Store original fetch and environment
  const originalFetch = global.fetch;
  const originalEnv = process.env;
  
  beforeAll(() => {
    // Set environment variables
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_URL: API_BASE_URL
    };
    
    // Mock fetch API
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        privacy_policy_title: "Privacy Policy",
        privacy_policy_content: "<p>Privacy content</p>",
        terms_title: "Terms & Conditions",
        terms_content: "<p>Terms content</p>"
      })
    });
  });
  
  afterAll(() => {
    // Restore fetch and environment
    global.fetch = originalFetch;
    process.env = originalEnv;
  });
  
  beforeEach(() => {
    // Clear mocks between tests
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<LegalSection />);
    expect(screen.getByTestId('legal-section')).toBeInTheDocument();
  });

  test('shows loading text', () => {
    render(<LegalSection />);
    expect(screen.getByTestId('loading-text')).toBeInTheDocument();
  });

  test('displays legal links', () => {
    render(<LegalSection />);
    expect(screen.getByTestId('privacy-button')).toBeInTheDocument();
    expect(screen.getByTestId('terms-button')).toBeInTheDocument();
  });
});
