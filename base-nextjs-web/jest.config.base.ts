import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
    //"istanbul" instead of v8 in <v27 of Jest
    coverageProvider: "v8",
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "text", "cobertura", "json-summary"],
    setupFiles: [
        //Prevents error "Runtime error: tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point."
        // 'reflect-metadata'
    ],
    testMatch: [
        "<rootDir>/test/**/*.test.ts?",
    ],
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // Use same content as the paths property in tsconfig.json
    moduleNameMapper: {
        '^@/(.*)$': '<rootdir>/src/$1',
    },
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,


};

export default config;
