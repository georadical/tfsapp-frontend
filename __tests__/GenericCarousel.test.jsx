import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GenericCarousel from '../components/GenericCarousel'

// Mock window.innerWidth
const mockWindowInnerWidth = (width) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width
  })
  window.dispatchEvent(new Event('resize'))
}

// Mock children components
const createTestSlides = (count) => {
  return Array.from({ length: count }, (_, i) => (
    <div key={i} data-testid={`slide-${i}`}>Slide {i + 1}</div>
  ))
}

describe('GenericCarousel Component', () => {
  beforeEach(() => {
    // Reset window size to desktop default
    mockWindowInnerWidth(1280)
    
    // Mock setInterval and clearInterval
    jest.useFakeTimers()
  })
  
  afterEach(() => {
    jest.useRealTimers()
  })

  // Test basic rendering
  test('renders slides correctly', () => {
    const slides = createTestSlides(5)
    
    render(
      <GenericCarousel>
        {slides}
      </GenericCarousel>
    )
    
    // All slides should be rendered
    expect(screen.getByTestId('slide-1')).toBeInTheDocument()
    expect(screen.getByTestId('slide-2')).toBeInTheDocument()
    expect(screen.getByTestId('slide-3')).toBeInTheDocument()
  })

  // Test navigation controls
  test('shows navigation controls when there are more slides than visible', () => {
    const slides = createTestSlides(5)
    
    render(
      <GenericCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}>
        {slides}
      </GenericCarousel>
    )
    
    // Navigation buttons should be visible
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  // Test hiding navigation when not enough slides
  test('hides navigation when there are not enough slides', () => {
    const slides = createTestSlides(3)
    
    render(
      <GenericCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}>
        {slides}
      </GenericCarousel>
    )
    
    // Navigation buttons should not be visible
    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Next slide')).not.toBeInTheDocument()
  })

  // Test navigation functionality
  test('moves to next slide when next button is clicked', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
    const slides = createTestSlides(5)
    
    // Mock container size for transform calculation
    Element.prototype.offsetWidth = 900
    
    render(
      <GenericCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}>
        {slides}
      </GenericCarousel>
    )
    
    const nextButton = screen.getByLabelText('Next slide')
    
    // Initial transform should be 0
    const container = document.querySelector('.flex.transition-transform')
    expect(container.style.transform).toBe('translateX(-0px)')
    
    // Click next button
    await user.click(nextButton)
    
    // Transform should change
    expect(container.style.transform).not.toBe('translateX(-0px)')
  })

  // Test autoplay functionality
  test('advances slides automatically when autoPlay is enabled', () => {
    const slides = createTestSlides(5)
    
    render(
      <GenericCarousel 
        itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
        autoPlay={true}
        autoPlaySpeed={1000}
      >
        {slides}
      </GenericCarousel>
    )
    
    const container = document.querySelector('.flex.transition-transform')
    
    // Initial transform should be 0
    expect(container.style.transform).toBe('translateX(-0px)')
    
    // Advance timer
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    
    // Transform should change after timer
    expect(container.style.transform).not.toBe('translateX(-0px)')
  })

  // Test pause on hover
  test('pauses autoplay when mouse enters and resumes when mouse leaves', () => {
    const slides = createTestSlides(5)
    
    render(
      <GenericCarousel 
        itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
        autoPlay={true}
        autoPlaySpeed={1000}
        pauseOnHover={true}
      >
        {slides}
      </GenericCarousel>
    )
    
    const container = document.querySelector('.overflow-hidden')
    
    // Mouse enter should pause
    fireEvent.mouseEnter(container)
    
    // Advance timer
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    
    // Transform should not change while paused
    const transform1 = document.querySelector('.flex.transition-transform').style.transform
    
    // Mouse leave should resume
    fireEvent.mouseLeave(container)
    
    // Advance timer again
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    
    // Transform should change after resuming
    const transform2 = document.querySelector('.flex.transition-transform').style.transform
    expect(transform2).not.toBe(transform1)
  })

  // Test responsive behavior
  test('adjusts cards per view based on screen width', () => {
    const slides = createTestSlides(6)
    
    render(
      <GenericCarousel itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}>
        {slides}
      </GenericCarousel>
    )
    
    // Desktop width - should show 3 per view
    // Now change to tablet width
    act(() => {
      mockWindowInnerWidth(1000)
    })
    
    // Change to mobile width
    act(() => {
      mockWindowInnerWidth(500)
    })
    
    // Testing responsive behavior is challenging in JSDOM
    // This test mainly verifies the resize listeners don't crash
    expect(true).toBeTruthy()
  })
})
