/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    pageExtensions: ["page.tsx"],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[t]sx?$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
}

module.exports = nextConfig
