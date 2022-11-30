// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  experimental: {
    payloadExtraction: false
  },
  vite: {
    assetsInclude:['**/*.m4v']
  }
})
