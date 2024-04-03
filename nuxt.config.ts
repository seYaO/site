// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: "src/",
  app: {
    /**
     * _nuxt /* 资源 404
     * 重构后发现，打包生成的js、css文件全部404，但是查看 "gh-pages" 分支，这个文件确实是存在的，查阅资料后发现，这是因为触发了Github.io的 content-security-policy（内容安全策略），所以被禁止访问了。
     */
    buildAssetsDir: "static", // 修改站点资产的文件夹名称，默认是_nuxt
    // baseURL: "/site/",
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
      link: [{ rel: "icon", href: "/logo.png" }],
      noscript: [{ children: "JavaScript is required" }],
      htmlAttrs: { lang: "zh-CN" },
      // bodyAttrs: { class: "font-sans" },
    },
  },
  experimental: {
    /**
     * _payload.json 文件 404
     */
    payloadExtraction: false, // 启用此选项时（默认情况下）提取使用nuxt generate生成的页面的有效负载
  },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image", "@vueuse/nuxt"],
  colorMode: {
    preference: "dark",
  },
  ui: {
    global: true,
    icons: ["simple-icons", "ph", "uil", "heroicons", "octicon", "logos"],
  },
  content: {
    api: {
      /**
       * 默认配置 '/api/_content'
       * 因为触发了Github.io的 content-security-policy（内容安全策略），禁止访问'/api/_content'
       */
      baseURL: "/api/content",
    },
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
  css: ["@/assets/css/main.css", "@/assets/css/scrollbars.css", "@/assets/css/transition.css"],
});
