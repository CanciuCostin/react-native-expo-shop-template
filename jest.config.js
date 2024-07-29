
module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
    transformIgnorePatterns: [
      'node_modules/(?!(@react-native|react-native|expo|@expo|expo-modules-core|react-redux|@unimodules)/)',
    ],
    transform: {
      '^.+\\.(js|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      "^@/(.*)$": "./src/$1"
    },
    collectCoverage: true,
    collectCoverageFrom: [
      "**/*.{ts,tsx}",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/jest.config.js"
    ]
  };