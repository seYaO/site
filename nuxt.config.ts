// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  app: {
    baseURL: "/site/",
    head: {
      title: "seYa 的网站", //网站标题
      meta: [
        { name: "description", content: "" },
        { name: "author", content: "lily" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "revisit-after", content: "7 days" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { charset: "UTF-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      ],

      // 网站link，可以在这里引入css和icon等
      link: [{ rel: "icon", href: "logo.png" }],
      noscript: [{ children: "JavaScript is required" }],
      htmlAttrs: { lang: "zh-CN" },
      bodyAttrs: { class: "font-sans" },
    },
  },
  // extends: ["@nuxt/ui-pro"],
  // extends: ["vitepress"],
  modules: ["@nuxt/content", "@nuxt/ui"],
  colorMode: {
    preference: "dark",
  },
  ui: {
    global: true,
    icons: ["simple-icons", "ph", "uil", "heroicons", "octicon", "logos"],
  },
  content: {
    highlight: {
      theme: {
        // // Default theme (same as single string)
        // default: 'vitesse-light',
        // // Theme used if `html.dark`
        // dark: 'vitesse-dark',
        // // Theme used if `html.sepia`
        // sepia: 'monokai',
        default: "material-theme-lighter",
        dark: "material-theme-palenight",
      },
      langs: ["js", "ts", "vue", "css", "scss", "sass", "html", "bash", "md", "mdc", "json"],
      preload: ["c", "cpp", "java"],
    },
    markdown: {
      tags: {
        // p:'MyCustomParagraph'
      },
      // Object syntax can be used to override default options
      // remarkPlugins: {
      //   // Override remark-emoji options
      //   'remark-emoji': {
      //     emoticon: true
      //   },
      //   // Disable remark-gfm
      //   'remark-gfm': false,
      //   // Add remark-oembed
      //   'remark-oembed': {
      //     // Options
      //   }
      // },
    },
  },
  css: [
    // '@unocss/reset/tailwind.css',
    // '@/assets/styles/global.scss',
    // '@/assets/styles/theme.css',
    // '@/assets/styles/transition.css',
    // '@/assets/styles/markdown.scss',
  ],
});
