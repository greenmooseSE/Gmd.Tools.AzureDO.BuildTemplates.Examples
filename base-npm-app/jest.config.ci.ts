// jest.config.ci.ts
import type {Config} from '@jest/types';
import base from './jest.config.base';

const config: Config.InitialOptions = {
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

export default config;
