module.exports = {
  transform: {
    '^.+\\.ts?(x)?$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/components/*/src/**/test?(s).ts?(x)',
    '<rootDir>/components/*/src/**/*.test?(s).ts?(x)',
    '<rootDir>/packages/*/src/**/test?(s).ts?(x)',
    '<rootDir>/packages/*/src/**/*.test?(s).ts?(x)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.ts'],
  snapshotSerializers: ['jest-emotion', 'enzyme-to-json/serializer'],
}
