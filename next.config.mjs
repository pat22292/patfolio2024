/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['res.cloudinary.com'],
        remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }, { protocol: "https", hostname: "github.com" }],

    //   loader: 'custom',
    //   loaderFile: './app/image.ts',
    },
};

export default nextConfig;
