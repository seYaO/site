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
  modules: [
    '@nuxt/content'
  ],
})
