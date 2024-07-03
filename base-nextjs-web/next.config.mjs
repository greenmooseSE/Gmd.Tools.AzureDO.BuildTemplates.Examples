/** @type {import('next').NextConfig} */
const nextConfig = {

    publicRuntimeConfig: {
        environment: process.env.environment
    }
};

export default nextConfig;
