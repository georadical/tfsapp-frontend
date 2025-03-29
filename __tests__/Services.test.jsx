import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Services from '../components/Services'

// Mock the ContactModalContext
jest.mock('../context/ContactModalContext', () => ({
  useContactModal: () => ({
    isOpen: false,
    openModal: jest.fn(),
    closeModal: jest.fn()
  }),
  ContactModalProvider: ({ children }) => <>{children}</>
}))

// Mock child components
jest.mock('../components/GenericCarousel', () => {
  return function MockCarousel({ children }) {
    return <div data-testid="mock-carousel">{children}</div>
  }
})

jest.mock('../components/ServiceCard', () => {
  return function MockServiceCard({ title, description, imageUrl, onLearnMore }) {
    return (
      <div data-testid="service-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={imageUrl} alt={title} />
        <button onClick={onLearnMore}>Read more →</button>
      </div>
    )
  }
})

jest.mock('../components/services/ServiceModal', () => {
  return function MockServiceModal({ isOpen, service, onClose }) {
    if (!isOpen) return null
    return (
      <div data-testid="service-modal">
        <h2>{service?.title}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    )
  }
})

// Mock fetch API
global.fetch = jest.fn()

// Mock services data
const mockServices = [
  {
    id: 1,
    title: 'Service 1',
    description: 'Description 1',
    image: '/image1.jpg'
  },
  {
    id: 2,
    title: 'Service 2',
    description: 'Description 2',
    image: '/image2.jpg'
  }
]

describe('Services Component', () => {
  beforeEach(() => {
    fetch.mockReset()
  })

  // Test loading state
  test('shows loading state while fetching services', async () => {
    // Delay the API response to ensure we see the loading state
    fetch.mockImplementation(() => new Promise(resolve => setTimeout(() => {
      resolve({
        ok: true,
        headers: { get: () => 'application/json' },
        json: () => Promise.resolve(mockServices)
      })
    }, 100)))
    
    render(<Services />)
    
    // Loading state should be visible
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    // Find the spinner by class rather than role
    expect(document.querySelector('.animate-spin')).toBeInTheDocument()
  })

  // Test successful service loading
  test('displays services when API returns data', async () => {
    fetch.mockResolvedValue({
      ok: true,
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve(mockServices)
    })
    
    render(<Services />)
    
    // Wait for services to load
    await waitFor(() => {
      expect(screen.getByTestId('mock-carousel')).toBeInTheDocument()
    })
    
    // Service cards should be rendered
    const serviceCards = screen.getAllByTestId('service-card')
    expect(serviceCards).toHaveLength(2)
    
    // Verify service content
    expect(screen.getByText('Service 1')).toBeInTheDocument()
    expect(screen.getByText('Service 2')).toBeInTheDocument()
  })

  // Test error handling
  test('displays error message when API fails', async () => {
    // Use an error message that includes "server" to trigger the conditional message
    fetch.mockRejectedValue(new Error('Failed to connect to server'))
    
    render(<Services />)
    
    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/Error/)).toBeInTheDocument()
    })
    
    // Now the Django server message should appear
    const errorElement = screen.getByRole('alert');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement.textContent).toContain('Django server');
  })

  // Test no services state
  test('displays message when no services are available', async () => {
    fetch.mockResolvedValue({
      ok: true,
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve([]) // Empty array
    })
    
    render(<Services />)
    
    // Wait for no services message
    await waitFor(() => {
      expect(screen.getByText('No services available at the moment.')).toBeInTheDocument()
    })
  })

  // Test opening the service modal
  test('opens modal when service card is clicked', async () => {
    const user = userEvent.setup()
    
    fetch.mockResolvedValue({
      ok: true,
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve(mockServices)
    })
    
    render(<Services />)
    
    // Wait for services to load
    await waitFor(() => {
      expect(screen.getAllByTestId('service-card')).toHaveLength(2)
    })
    
    // Click on the first service's read more button
    const readMoreButtons = screen.getAllByText('Read more →')
    await user.click(readMoreButtons[0])
    
    // Modal should be open with the service title
    await waitFor(() => {
      const modal = screen.getByTestId('service-modal')
      expect(modal).toBeInTheDocument()
      // Check the title within the modal
      const modalTitle = modal.querySelector('h2')
      expect(modalTitle).toHaveTextContent('Service 1')
    })
  })

  // Test closing the service modal
  test('closes modal when close button is clicked', async () => {
    const user = userEvent.setup()
    
    fetch.mockResolvedValue({
      ok: true,
      headers: { get: () => 'application/json' },
      json: () => Promise.resolve(mockServices)
    })
    
    render(<Services />)
    
    // Wait for services to load
    await waitFor(() => {
      expect(screen.getAllByTestId('service-card')).toHaveLength(2)
    })
    
    // Open the modal
    const readMoreButtons = screen.getAllByText('Read more →')
    await user.click(readMoreButtons[0])
    
    // Wait for modal to open
    await waitFor(() => {
      expect(screen.getByTestId('service-modal')).toBeInTheDocument()
    })
    
    // Close the modal
    await user.click(screen.getByText('Close'))
    
    // Modal should be closed
    await waitFor(() => {
      expect(screen.queryByTestId('service-modal')).not.toBeInTheDocument()
    })
  })
})
