// module.exports = {
//     reactStrictMode: true,
//     env: {
//         PORT: process.env.PORT,
//         ENVIRONMENT: process.env.ENVIRONMENT,
//         BASEURL: process.env.BASEURL,
//         SERVICE_API: process.env.SERVICE_API,
//         MEMBER: process.env.MEMBER,
//         ORIGIN: process.env.ORIGIN,
//         SERVICE_ACCOUNT: process.env.SERVICE_ACCOUNT,
//         SERVICE_CONTENT: process.env.SERVICE_CONTENT,
//     },
//     images: {
//         domains: ['ik.imagekit.io', 'cdn.inspigo.id'],
//         formats: ['image/avif', 'image/webp'],
//     },
// }
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    env: {
        PORT: process.env.PORT,
        ENVIRONMENT: process.env.ENVIRONMENT,
        BASEURL: process.env.BASEURL,
        SERVICE_API: process.env.SERVICE_API,
        MEMBER: process.env.MEMBER,
        ORIGIN: process.env.ORIGIN,
        SERVICE_ACCOUNT: process.env.SERVICE_ACCOUNT,
        SERVICE_CONTENT: process.env.SERVICE_CONTENT,
    },
    images: {
        domains: ['ik.imagekit.io', 'cdn.inspigo.id'],
        formats: ['image/avif', 'image/webp'],
    },
})
