module.exports = {
    reactStrictMode: true,
    env: {
        PORT: process.env.PORT,
        ENVIRONMENT: process.env.ENVIRONMENT,
    },
    images: {
        domains: ['ik.imagekit.io', 'cdn.inspigo.id'],
        formats: ['image/avif', 'image/webp'],
    },
}
