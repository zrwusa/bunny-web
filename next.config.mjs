/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false, // Disable React Strict Mode
    images: {
        remotePatterns: [{hostname: 'img.daisyui.com'}],
    }
};

export default nextConfig;
