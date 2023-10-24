module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  globalSetup: 'jest-preset-angular/global-setup',
  modulePathIgnorePatterns: [
    "<rootDir>/e2e"
  ],
};
