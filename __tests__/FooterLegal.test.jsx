import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FooterLegal from '../components/footer/FooterLegal';

// Create a more reliable mock for LegalModal
jest.mock('../components/legal/LegalModal', () => {
  // Return a function component that behaves like the original
  return function MockLegalModal({ isOpen, onClose, content }) {
    if (!isOpen) return null;
    
    return (
      <div data-testid="legal-modal" className="modal-container">
        <div className="modal-content">
          <h2 data-testid="modal-title">{content?.title || 'Modal Title'}</h2>
          <div 
            data-testid="modal-body"
            dangerouslySetInnerHTML={{ __html: content?.body || 'Modal Content' }}
          />
          <button 
            data-testid="modal-close-button" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
});

// Mock CSS module
jest.mock('../components/footer/Footer.module.css', () => ({
  footerLegal: 'mock-footer-legal',
  copyright: 'mock-copyright',
  legalLinks: 'mock-legal-links',
  legalLink: 'mock-legal-link',
  separator: 'mock-separator',
  loadingState: 'mock-loading-state',
  errorState: 'mock-error-state'
}), { virtual: true });

// Mock API URL
const API_BASE_URL = 'http://127.0.0.1:8000';

// Mock legal data
const mockLegalData = {
  company_disclaimer: " 2025 TFS Company. All rights reserved.",
  privacy_policy_title: "Privacy Policy",
  privacy_policy_content: "<p>This is the privacy policy content.</p>",
  privacy_policy_text: "Privacy Policy",
  terms_title: "Terms & Conditions",
  terms_content: "<p>These are the terms and conditions content.</p>",
  terms_text: "Terms & Conditions"
};

describe('FooterLegal Component', () => {
  // Store original environment and fetch
  const originalEnv = process.env;
  const originalFetch = global.fetch;
  
  beforeAll(() => {
    // Set environment variables
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_URL: API_BASE_URL
    };
  });
  
  afterAll(() => {
    // Restore environment and fetch
    process.env = originalEnv;
    global.fetch = originalFetch;
  });
  
  beforeEach(() => {
    // Create a new mock for fetch before each test
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({...mockLegalData})
    });
    
    // Clear mocks between tests
    jest.clearAllMocks();
  });

  test('shows loading state while fetching legal data', async () => {
    // Delay the response to show loading state
    global.fetch.mockImplementationOnce(() => 
      new Promise(resolve => setTimeout(() => {
        resolve({
          ok: true,
          json: () => Promise.resolve({...mockLegalData})
        });
      }, 100))
    );
    
    render(<FooterLegal />);
    
    // Loading state should be visible
    expect(screen.getByText(/Loading legal information/i)).toBeInTheDocument();
  });

  test('displays legal footer when API returns data', async () => {
    render(<FooterLegal />);
    
    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText(/TFS Company. All rights reserved./i)).toBeInTheDocument();
    });
    
    // Legal links should be rendered
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms & Conditions/i)).toBeInTheDocument();
  });

  test('displays error message when API fails', async () => {
    // Mock API failure for this test only
    global.fetch.mockRejectedValueOnce(new Error('Failed to fetch'));
    
    render(<FooterLegal />);
    
    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/Failed to load legal information/i)).toBeInTheDocument();
    });
  });

  test('opens Privacy Policy modal when link is clicked', async () => {
    const user = userEvent.setup();
    
    render(<FooterLegal />);
    
    // Wait for content to be loaded
    await waitFor(() => {
      expect(screen.getByText(/TFS Company. All rights reserved./i)).toBeInTheDocument();
    });
    
    // Get the Privacy Policy link (using regex to be more flexible)
    const privacyLink = screen.getByText(/Privacy Policy/i);
    
    // Click the privacy policy link
    await user.click(privacyLink);
    
    // Check if modal is open with explicit wait
    await waitFor(() => {
      const modal = screen.queryByTestId("legal-modal");
      expect(modal).toBeInTheDocument();
    });
    
    // Check modal title
    const modalTitle = screen.getByTestId("modal-title");
    expect(modalTitle).toHaveTextContent(/Privacy Policy/i);
  });

  test('opens Terms & Conditions modal when link is clicked', async () => {
    const user = userEvent.setup();
    
    render(<FooterLegal />);
    
    // Wait for content to be loaded
    await waitFor(() => {
      expect(screen.getByText(/TFS Company. All rights reserved./i)).toBeInTheDocument();
    });
    
    // Get the Terms link (using regex to be more flexible)
    const termsLink = screen.getByText(/Terms & Conditions/i);
    
    // Click the terms link
    await user.click(termsLink);
    
    // Check if modal is open with explicit wait
    await waitFor(() => {
      const modal = screen.queryByTestId("legal-modal");
      expect(modal).toBeInTheDocument();
    });
    
    // Check modal title
    const modalTitle = screen.getByTestId("modal-title");
    expect(modalTitle).toHaveTextContent(/Terms & Conditions/i);
  });

  test('closes modal when close button is clicked', async () => {
    const user = userEvent.setup();
    
    render(<FooterLegal />);
    
    // Wait for content to be loaded
    await waitFor(() => {
      expect(screen.getByText(/TFS Company. All rights reserved./i)).toBeInTheDocument();
    });
    
    // Get and click the Privacy Policy link
    const privacyLink = screen.getByText(/Privacy Policy/i);
    await user.click(privacyLink);
    
    // Wait for modal to open
    await waitFor(() => {
      expect(screen.queryByTestId("legal-modal")).toBeInTheDocument();
    });
    
    // Click the close button
    const closeButton = screen.getByTestId("modal-close-button");
    await user.click(closeButton);
    
    // Check that modal is closed with explicit wait
    await waitFor(() => {
      expect(screen.queryByTestId("legal-modal")).not.toBeInTheDocument();
    });
  });

  test('uses fallback text when API data is missing text fields', async () => {
    // Mock data with missing text fields
    const incompleteData = {
      company_disclaimer: " 2025 TFS Company. All rights reserved.",
      privacy_policy_title: "Privacy Policy",
      privacy_policy_content: "<p>This is the privacy policy content.</p>",
      terms_title: "Terms & Conditions",
      terms_content: "<p>These are the terms and conditions content.</p>"
    };
    
    // Mock API with incomplete data for this test only
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(incompleteData)
    });
    
    render(<FooterLegal />);
    
    // Wait for data to load and component to update
    await waitFor(() => {
      expect(screen.getByText(/TFS Company. All rights reserved./i)).toBeInTheDocument();
    });
    
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms & Conditions/i)).toBeInTheDocument();
  });
});
