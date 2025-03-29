// __tests__/utils/test-utils.js
import { render } from '@testing-library/react'

// Custom render function to wrap components with providers if needed
function customRender(ui, options = {}) {
  return render(ui, {
    // Add provider wrappers here if needed
    // Example: wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    ...options,
  })
}

// Mock window scroll with Object.defineProperty
export function mockWindowScroll() {
  const originalScrollY = window.scrollY

  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    writable: true,
    value: 0
  })

  return {
    scrollTo: (scrollY) => {
      window.scrollY = scrollY
      window.dispatchEvent(new Event('scroll'))
    },
    restore: () => {
      Object.defineProperty(window, 'scrollY', {
        configurable: true,
        value: originalScrollY,
      })
    }
  }
}

// re-export everything from RTL
export * from '@testing-library/react'

// override render method
export { customRender as render }
