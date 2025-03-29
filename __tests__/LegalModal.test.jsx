import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LegalModal from '../components/legal/LegalModal'

// Mock content for testing
const mockContent = {
  title: "Privacy Policy",
  body: "This is a sample privacy policy content.\nSecond paragraph of the policy."
}

describe('LegalModal Component', () => {
  // Test that modal doesn't render when closed
  test('does not render when isOpen is false', () => {
    render(<LegalModal isOpen={false} onClose={() => {}} content={mockContent} />)
    
    // ✔️ Confirms modal is not in the document when closed
    expect(screen.queryByText('Privacy Policy')).not.toBeInTheDocument()
  })

  // Test that modal renders correctly when open
  test('renders with correct content when open', () => {
    render(<LegalModal isOpen={true} onClose={() => {}} content={mockContent} />)
    
    // ✔️ Confirms title is visible
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    
    // ✔️ Confirms content paragraphs are visible
    expect(screen.getByText('This is a sample privacy policy content.')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph of the policy.')).toBeInTheDocument()
    
    // ✔️ Confirms close button is visible
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  // Test the close button functionality
  test('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onCloseMock = jest.fn()
    
    render(<LegalModal isOpen={true} onClose={onCloseMock} content={mockContent} />)
    
    // Click the close button
    await user.click(screen.getByText('Close'))
    
    // ✔️ Confirms onClose was called
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
  
  // Test the X button functionality
  test('calls onClose when X button is clicked', async () => {
    const user = userEvent.setup()
    const onCloseMock = jest.fn()
    
    render(<LegalModal isOpen={true} onClose={onCloseMock} content={mockContent} />)
    
    // Click the X button
    await user.click(screen.getByLabelText('Close'))
    
    // ✔️ Confirms onClose was called
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  // Test ESC key functionality
  test('calls onClose when ESC key is pressed', () => {
    const onCloseMock = jest.fn()
    
    render(<LegalModal isOpen={true} onClose={onCloseMock} content={mockContent} />)
    
    // Press ESC key
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
    
    // ✔️ Confirms onClose was called
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  // Test HTML content rendering
  test('renders HTML content correctly', () => {
    const htmlContent = {
      title: "Terms & Conditions",
      body: "<p>This is <strong>HTML</strong> content.</p><p>Another paragraph.</p>"
    }
    
    render(<LegalModal isOpen={true} onClose={() => {}} content={htmlContent} />)
    
    // ✔️ Confirms HTML content renders correctly
    const modalContent = document.querySelector('.prose')
    expect(modalContent.innerHTML).toContain('<p>This is <strong>HTML</strong> content.</p>')
  })
})
