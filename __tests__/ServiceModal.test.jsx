import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ServiceModal from '../components/services/ServiceModal'

// Mock the service object
const mockService = {
  id: 1,
  title: 'Test Service',
  description: 'This is a test service description with enough words to split into two lines',
  image: '/test-image.jpg',
  modal_image: '/test-modal-image.jpg',
  modal_subtitle: 'Service Subtitle',
  modal_content: 'This is the detailed content about the service.\nThis is a new paragraph.'
}

describe('ServiceModal Component', () => {
  // Test that modal doesn't render when closed
  test('does not render when isOpen is false', () => {
    render(<ServiceModal isOpen={false} onClose={() => {}} service={mockService} />)
    
    // Modal should not be in the document
    expect(screen.queryByText('Test Service')).not.toBeInTheDocument()
  })

  // Test that modal renders correctly when open
  test('renders with correct content when open', () => {
    render(<ServiceModal isOpen={true} onClose={() => {}} service={mockService} />)
    
    // Title should be visible with correct styling
    const title = screen.getByText('Test Service')
    expect(title).toBeInTheDocument()
    expect(title.tagName).toBe('H2')
    expect(title.className).toContain('text-xl sm:text-2xl')
    
    // Subtitle should be visible with blue color styling
    const subtitle = screen.getByText('Service Subtitle')
    expect(subtitle).toBeInTheDocument()
    expect(subtitle.className).toContain('text-[#3951a3]')
    
    // Content paragraphs should be visible
    expect(screen.getByText('This is the detailed content about the service.')).toBeInTheDocument()
    expect(screen.getByText('This is a new paragraph.')).toBeInTheDocument()
    
    // Close button should be visible with orange color
    const closeButton = screen.getByText('Close')
    expect(closeButton).toBeInTheDocument()
    expect(closeButton.className).toContain('bg-[#ec9932]')
  })

  // Test the description splitting functionality
  test('splits description into two lines correctly', () => {
    render(<ServiceModal isOpen={true} onClose={() => {}} service={mockService} />)
    
    // The description should be split into two separate paragraph elements
    const firstLine = screen.getByText('This is a test service description with')
    const secondLine = screen.getByText('enough words to split into two lines')
    
    expect(firstLine).toBeInTheDocument()
    expect(secondLine).toBeInTheDocument()
    
    // Verify they are separate paragraph elements
    expect(firstLine.tagName).toBe('P')
    expect(secondLine.tagName).toBe('P')
    
    // Verify they have the compact text styling from user preferences
    expect(firstLine.className).toContain('text-xs sm:text-sm')
    expect(secondLine.className).toContain('text-xs sm:text-sm')
  })

  // Test the close button functionality
  test('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onCloseMock = jest.fn()
    
    render(<ServiceModal isOpen={true} onClose={onCloseMock} service={mockService} />)
    
    // Click the close button
    await user.click(screen.getByText('Close'))
    
    // onClose should have been called
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  // Test ESC key to close modal
  test('calls onClose when ESC key is pressed', () => {
    const onCloseMock = jest.fn()
    
    render(<ServiceModal isOpen={true} onClose={onCloseMock} service={mockService} />)
    
    // Press ESC key
    fireEvent.keyDown(document, { key: 'Escape' })
    
    // onClose should have been called
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  // Test click outside to close modal
  test('calls onClose when clicking outside the modal', () => {
    const onCloseMock = jest.fn()
    
    render(<ServiceModal isOpen={true} onClose={onCloseMock} service={mockService} />)
    
    // Click outside the modal (the overlay)
    fireEvent.mouseDown(document.querySelector('.fixed.inset-0'))
    
    // onClose should have been called
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  // Test HTML content rendering
  test('renders HTML content correctly', () => {
    const htmlService = {
      ...mockService,
      modal_content: '<p>This is <strong>HTML</strong> content.</p><p>Another paragraph.</p>'
    }
    
    render(<ServiceModal isOpen={true} onClose={() => {}} service={htmlService} />)
    
    // Check HTML is rendered correctly
    const contentContainer = document.querySelector('.prose')
    expect(contentContainer.innerHTML).toContain('<p>This is <strong>HTML</strong> content.</p>')
    
    // Strong element should be rendered properly
    const strongElement = contentContainer.querySelector('strong')
    expect(strongElement).toBeInTheDocument()
    expect(strongElement.textContent).toBe('HTML')
  })

  // Test image fallback
  test('uses fallback image when image fails to load', () => {
    render(<ServiceModal isOpen={true} onClose={() => {}} service={mockService} />)
    
    // Get the image element
    const image = screen.getByAltText('Test Service')
    
    // Simulate error loading original image
    fireEvent.error(image)
    
    // Image source should be replaced with placeholder
    expect(image.src).toContain('/api/placeholder/900/400')
  })

  // Test modal without subtitle and content
  test('handles missing subtitle and content gracefully', () => {
    const minimalService = {
      id: 2,
      title: 'Minimal Service',
      description: 'Just a basic description',
      image: '/basic-image.jpg'
    }
    
    render(<ServiceModal isOpen={true} onClose={() => {}} service={minimalService} />)
    
    // Title and description should be visible
    expect(screen.getByText('Minimal Service')).toBeInTheDocument()
    
    // Subtitle and detailed content sections should not be rendered
    expect(screen.queryByText(/subtitle/i)).not.toBeInTheDocument()
    expect(document.querySelector('.prose')).not.toBeInTheDocument()
  })
})
