/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["avatars.githubusercontent.com", "i.imgur.com"],
	},
};

module.exports = nextConfig;
