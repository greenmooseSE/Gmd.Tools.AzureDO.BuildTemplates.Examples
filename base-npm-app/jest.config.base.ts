import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    //"istanbul" instead of v8 in <v27 of Jest
    coverageProvider: "v8",
    coverageDirectory: "coverage",
    coverageReporters: ["lcov", "text", "cobertura", "json-summary"],
    setupFiles: [
        //Prevents error "Runtime error: tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point."
        'reflect-metadata'
    ],
    testMatch: [
        "<rootDir>/test/**/*.test.ts",
    ],

};

export default config;
