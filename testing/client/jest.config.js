module.exports = {
  "testMatch": [
    "**/(*.)+(test).(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testEnvironment": 'jsdom',
  "setupFilesAfterEnv": [
    "<rootDir>/src/jest.setup.ts"
  ]
}