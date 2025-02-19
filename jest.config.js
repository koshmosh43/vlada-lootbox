const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/store/(.*)$': '<rootDir>/store/$1',
  },

};

module.exports = createJestConfig(customJestConfig);