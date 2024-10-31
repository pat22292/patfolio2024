/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['res.cloudinary.com'],
        remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],

    //   loader: 'custom',
    //   loaderFile: './app/image.ts',
    },
};

export default nextConfig;
