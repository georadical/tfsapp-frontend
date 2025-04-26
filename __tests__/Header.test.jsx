import { render, screen, act } from '@testing-library/react'
import Header from '../components/Header'
import { API_BASE } from '../lib/api'

// Mock the ContactModalContext
jest.mock('../context/ContactModalContext', () => ({
  useContactModal: () => ({
    isOpen: false,
    openModal: jest.fn(),
    closeModal: jest.fn()
  }),
  ContactModalProvider: ({ children }) => <>{children}</>
}))

// Mock Menu component to simplify tests
jest.mock('../components/Menu', () => {
  return function MockMenu(props) {
    return <nav data-testid="mock-menu"></nav>
  }
})

// Mock fetch API
global.fetch = jest.fn()

// Simple mock for window scroll events
const mockScroll = (scrollY) => {
  Object.defineProperty(window, 'scrollY', { value: scrollY, configurable: true });
  window.dispatchEvent(new Event('scroll'));
}

describe('Header Component', () => {
  // Setup and teardown
  beforeEach(() => {
    // Reset mocks
    fetch.mockReset()
    
    // Mock successful API response
    fetch.mockResolvedValue({
      ok: true,
      headers: {
        get: jest.fn().mockReturnValue('application/json')
      },
      json: jest.fn().mockResolvedValue({
        header_background: '/test-background.jpg'
      })
    })
    
    // Reset scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  // Test basic rendering
  test('renders header with logo', async () => {
    await act(async () => {
      render(<Header menuItems={[]} />)
    })
    
    const logo = screen.getByAltText('Logo')
    expect(logo).toBeInTheDocument()
  })

  // Simplified test for header height change
  test('changes header height on scroll', async () => {
    let container;
    
    await act(async () => {
      const renderResult = render(<Header menuItems={[]} />)
      container = renderResult.container;
    })
    
    const header = screen.getByRole('banner')
    
    // Initial state - should have h-48
    expect(header).toHaveClass('h-48')
    
    // Trigger scroll
    await act(async () => {
      mockScroll(100)
    })
    
    // After scroll - should have h-24
    expect(header).toHaveClass('h-24')
  })
  
  // Test API fetch
  test('fetches background image from API', async () => {
    await act(async () => {
      render(<Header menuItems={[]} />)
    })
    
    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/site-config/`, expect.anything())
  })
})
