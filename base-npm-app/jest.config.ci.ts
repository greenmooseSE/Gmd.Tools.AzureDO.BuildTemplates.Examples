// jest.config.ci.ts
import type {Config} from '@jest/types';
import base from './jest.config.base';

const config: Config.InitialOptions = {
    ...base,
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/submodules/'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/submodules/'
    ],
};

export default config;
