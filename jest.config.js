/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  passWithNoTests: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/out/", "/cypress/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
