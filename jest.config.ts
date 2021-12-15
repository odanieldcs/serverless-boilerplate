export default {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: ['src/**/*.ts'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/tests/$1',
  },
  restoreMocks: true,
  slowTestThreshold: 5,
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.(test|spec).ts'],

  // setupFiles: ['<rootDir>/tests/setup-tests.ts'],
  // setupFilesAfterEnv: ['<rootDir>/tests/setup-tests-after-env.ts'],

  transform: {
    '.+\\.ts$': 'ts-jest',
  },

  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
};
