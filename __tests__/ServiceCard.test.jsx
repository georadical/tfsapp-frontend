import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ServiceCard from '../components/ServiceCard'

describe('ServiceCard Component', () => {
  const defaultProps = {
    title: 'Test Service',
    description: 'This is a test service description',
    imageUrl: '/test-image.jpg',
    onLearnMore: jest.fn(),
  }

  // Test that the card renders with required props
  test('renders with correct title and description', () => {
    render(<ServiceCard {...defaultProps} />)
    
    // Confirms title is visible
    expect(screen.getByText('Test Service')).toBeInTheDocument()
    
    // Confirms description is visible
    expect(screen.getByText('This is a test service description')).toBeInTheDocument()
  })

  // Test button text customization
  test('renders with custom button text when provided', () => {
    render(<ServiceCard {...defaultProps} buttonText="View Details" />)
    
    // Confirms custom button text is used
    expect(screen.getByText('View Details')).toBeInTheDocument()
  })

  // Test default button text
  test('renders with default button text when not provided', () => {
    render(<ServiceCard {...defaultProps} />)
    
    // Confirms default button text is used
    expect(screen.getByText('Read more →')).toBeInTheDocument()
  })

  // Test onLearnMore callback
  test('calls onLearnMore callback when button is clicked', async () => {
    const user = userEvent.setup()
    const onLearnMoreMock = jest.fn()
    
    render(<ServiceCard {...defaultProps} onLearnMore={onLearnMoreMock} />)
    
    // Click the button
    await user.click(screen.getByText('Read more →'))
    
    // Confirms callback was called
    expect(onLearnMoreMock).toHaveBeenCalledTimes(1)
  })

  // Test custom background color
  test('applies custom background color when provided', () => {
    render(<ServiceCard {...defaultProps} bgColor="bg-gray-100" />)
    
    // Find the container div that should have the bg color
    const container = screen.getByText('Test Service').closest('.bg-gray-100')
    
    // Confirms custom bg color is applied
    expect(container).toBeInTheDocument()
  })

  // Test image fallback
  test('uses fallback image when image fails to load', () => {
    render(<ServiceCard {...defaultProps} />)
    
    // Get the image element
    const image = screen.getByAltText('Test Service')
    
    // Simulate error loading original image
    fireEvent.error(image)
    
    // Confirms fallback image is used
    expect(image.src).toContain('/api/placeholder/400/300')
  })
})
