/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeDetection: false,
    realDefaultLocale: 'vi',
  },
  env: {
    
  },
  images: {
    domains: ['assets.vercel.com'],
  },
}

module.exports = nextConfig
