module.exports = {
  preset: 'jest-preset-angular',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\",
  ],
  coverageProvider: "v8",
  globalSetup: "jest-preset-angular/global-setup",
  moduleDirectories: [
    "node_modules"
  ],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "@app/(.*)$": "<rootDir>/src/app/$1",
    "@core/(.*)$": "<rootDir>/src/app/core/$1",
    "@shared/(.*)$": "<rootDir>/src/app/shared/$1",
    "@jest-helpers/(.*)$": "<rootDir>/src/jest-helpers/$1",
    "package.json": "<rootDir>/package.json"
  },
  setupFiles: [],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\",
    "\\\\jest-helpers\\\\"
  ],
  testMatch: [
    "<rootDir>/src/**/*.(spec|test).ts"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,ts,jsx,tsx}", 
    "!src/**/*.spec.{js,ts,jsx,tsx}", 
    "!src/**/index.{js,ts}", 
    "!src/**/*.mock.{js,ts}", 
  ],
};
