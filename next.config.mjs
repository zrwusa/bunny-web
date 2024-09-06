/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false, // Disable React Strict Mode
    images: {
        remotePatterns: [
            {hostname: "img.daisyui.com"},
            {hostname: "avatars.githubusercontent.com"},
            {hostname: "lh3.googleusercontent.com"},
            {hostname: "i.imgur.com"}
        ],
    }
};

export default nextConfig;
