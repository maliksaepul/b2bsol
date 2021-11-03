module.exports = {
    reactStrictMode: true,
    env: {
        PORT: process.env.PORT,
        ENVIRONMENT: process.env.ENVIRONMENT,
    },
    images: {
        domains: ['ik.imagekit.io'],
        formats: ['image/avif', 'image/webp'],
    },
}
