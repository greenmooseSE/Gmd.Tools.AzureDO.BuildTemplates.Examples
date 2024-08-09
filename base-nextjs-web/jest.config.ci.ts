import type {Config} from 'jest';
import base from './jest.config.base';
import nextJest from "next/jest";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})
const config: Config = {
    ...base,
    collectCoverage: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/submodules/'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/submodules/'
    ],
    // Make sure CI can process test result file
    testResultsProcessor: 'jest-junit',

    // Run tests sequentially
    maxWorkers: 1,

};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
