/** @type {import('next').NextConfig} */
const nextConfig = {
    //reactStrictMode in next.config.mjs enables React's Strict Mode in development, a tool that highlights potential component lifecycle issues, unsafe legacy features usage, and unexpected side effects, but does not impact production performance.
    reactStrictMode: true,
    //swcMinify: true in next.config.mjs enables the SWC compiler for code minification, leading to faster builds and improved performance due to SWC's quicker compilation times, while not affecting the runtime behavior.
    swcMinify: true,
    // Specifies the base path for the application, useful when serving the app from a subdirectory.
    basePath: '',
    // Specifies the base path for serving static assets, useful when serving assets from a CDN.
    assetPrefix: '',
    env: {
        environment: process.env.environment
    }
};

export default nextConfig;
