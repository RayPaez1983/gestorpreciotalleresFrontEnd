import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // The root directory that Jest should scan for tests and modules within
  rootDir: '.',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],

  // A list of paths to directories that Jest should use to search for files
  moduleDirectories: ['node_modules', 'src'],

  // A list of file extensions that Jest will look for when running tests
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // A list of regular expressions that match filenames that should be excluded from coverage
  coveragePathIgnorePatterns: ['node_modules'],

  // The maximum amount of time in milliseconds that a test can run before Jest will abort it
  testTimeout: 10000,
};

export default config;
