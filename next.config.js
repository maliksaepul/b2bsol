module.exports = {
    reactStrictMode: true,
    env: {
        PORT: process.env.PORT,
        ENVIRONMENT: process.env.ENVIRONMENT,
        BASEURL: process.env.BASEURL,
    },
    images: {
        domains: ['ik.imagekit.io', 'cdn.inspigo.id'],
        formats: ['image/avif', 'image/webp'],
    },
}
