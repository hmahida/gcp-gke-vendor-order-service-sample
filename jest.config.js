module.exports = {
  rootDir: './src',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  collectCoverageFrom: ['**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/config/', '/coverage/', '/server/', '/__tests__/', 'src/index.js', 'src/config/.*'],
  testMatch: ['**/__tests__/**/*.spec.js'],
};
