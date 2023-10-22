// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  css: ['/assets/css/tailwind.css'],
  app:{
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'Misskey デコレーションアイコンプレビュー',
    link: [
      { rel: "icon", type: "image/png", href: "favicon-16x16.png" },
      { rel: "icon", type: "image/png", href: "favicon-kusodeka.png" },
      { rel: "apple-touch-icon", href: "favicon-16x16.png" },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Misskeyのデコレーションアイコンのプレビューが見られるサイトです' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Misskeyのデコレーションアイコンのプレビューが見られるサイトです' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://icon.nanasi-apps.xyz' },
      { hid: 'og:title', property: 'og:title', content: 'Misskey decoration icon preview' },
      { hid: 'og:description', property: 'og:description', content: 'Misskeyのデコレーションアイコンのプレビューが見られるサイトです' },
    ],
  },
  }
})
