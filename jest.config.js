// jest.config.js
const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handle module aliases (if you're using these in your project)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/context/(.*)$': '<rootDir>/context/$1',
  },
  // Increase isolation between tests
  resetMocks: true,
  restoreMocks: true,
  clearMocks: true,
  // Run tests in randomized order to help identify test interdependencies
  testSequencer: '<rootDir>/node_modules/@jest/test-sequencer',
  // Improve test reporting for troubleshooting
  verbose: true
}

module.exports = createJestConfig(customJestConfig)
