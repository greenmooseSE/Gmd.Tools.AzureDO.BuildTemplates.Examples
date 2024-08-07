/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development';
const basePath = isDevelopment ? '' : (process.env.NEXT_PUBLIC_BASE_PATH || '');
console.log(`Reading next.config.mjs in environment '${process.env.NODE_ENV}' with basePath: '${basePath}'.`);
const nextConfig = {
    //reactStrictMode in next.config.mjs enables React's Strict Mode in development, a tool that highlights potential component lifecycle issues, unsafe legacy features usage, and unexpected side effects, but does not impact production performance.
    reactStrictMode: true,
    //swcMinify: true in next.config.mjs enables the SWC compiler for code minification, leading to faster builds and improved performance due to SWC's quicker compilation times, while not affecting the runtime behavior.
    swcMinify: true,
    // Specifies the base path for the application, useful when serving the app from a subdirectory.
    basePath: basePath,
    // Specifies the base path for serving static assets, useful when serving assets from a CDN.
    assetPrefix: '',
    publicRuntimeConfig: {
        basePath: basePath,
    }
}
export default nextConfig;
