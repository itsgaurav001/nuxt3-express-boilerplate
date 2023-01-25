import vuetify from 'vite-plugin-vuetify';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  components: true,
  css: ['vuetify/styles'],
  vite: {
    server: {
      port: 3000, // default: 3000
      // host: 'localhost', // default: localhost,
      // timing: false,
    },
    ssr: {
      noExternal: ['vuetify']
    },
  },
  modules: [
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
      }
    ],
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        config.plugins.push(vuetify())
      )
    }
  ],
})