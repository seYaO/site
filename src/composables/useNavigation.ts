import { createSharedComposable } from "@vueuse/core";

const _useNavigation = () => {
  const headerLinks = computed(() => {
    const route = useRoute();

    return [
      // {
      //   label: "文档",
      //   icon: "i-ph-book-bookmark-duotone",
      //   to: "/docs",
      //   children: [
      //     {
      //       label: "HTML 教程",
      //       description: "本教程完整介绍 HTML 语言的所有内容，既可以当作初学者的入门教程，也可以用作参考手册查阅语法。",
      //       icon: "i-ph-file-html ",
      //       to: "/docs/html-tutorial",
      //       active: route.path.startsWith("/docs/html-tutorial"),
      //     },
      //     {
      //       label: "JavaScript 教程",
      //       description: "本教程全面介绍 JavaScript 核心语法，覆盖了 ES5 和 DOM 规范的所有内容。",
      //       icon: "i-simple-icons-javascript",
      //       to: "/docs/jstutorial",
      //       active: route.path.startsWith("/docs/jstutorial"),
      //     },
      //     {
      //       label: "ES6 教程",
      //       description: "全面介绍 ECMAScript 6 新引入的语法特性。",
      //       icon: "i-ph-code",
      //       to: "/docs/es6tutorial",
      //       active: route.path.startsWith("/docs/es6tutorial"),
      //     },
      //     {
      //       label: "TypeScript 教程",
      //       description: "TypeScript 开源教程，介绍基本概念和用法，面向初学者。",
      //       icon: "i-ph-code",
      //       to: "/docs/tstutorial",
      //       active: route.path.startsWith("/docs/tstutorial"),
      //     },
      //     {
      //       label: "Web API 教程",
      //       description: "Web API 教程，提供各种浏览器 API 文档，正在建设中。",
      //       icon: "i-ph-code",
      //       to: "/docs/webapi",
      //       active: route.path.startsWith("/docs/webapi"),
      //     },
      //     {
      //       label: "C 语言教程",
      //       description: "C 语言入门教程。",
      //       icon: "i-ph-code",
      //       to: "/docs/clang",
      //       active: route.path.startsWith("/docs/clang"),
      //     },
      //     {
      //       label: "Bash 脚本教程",
      //       description: "本教程介绍 Linux 命令行 Bash 的基本用法和脚本编程。",
      //       icon: "i-simple-icons-gnubash",
      //       to: "/docs/bash",
      //       active: route.path.startsWith("/docs/bash"),
      //     },
      //     {
      //       label: "SSH 教程",
      //       description: "SSH 是 Linux 系统的登录工具，现在广泛用于服务器登录和各种加密通信。",
      //       icon: "i-ph-code",
      //       to: "/docs/ssh",
      //       active: route.path.startsWith("/docs/ssh"),
      //     },
      //     {
      //       label: "前端八股文",
      //       description: "高级前端知识点，侧重于问题点，解决方案。主要有`浏览器``基础``样式``网络``前端工程化``框架``算法`等",
      //       icon: "i-ph-chats-teardrop-duotone",
      //       to: "/docs/learn-tutorial",
      //       active: route.path.startsWith("/docs/learn-tutorial"),
      //     },
      //   ],
      // },
      {
        label: "博客",
        icon: "i-ph-newspaper-duotone",
        to: "/blogs",
        children: [
          {
            label: "示例说明",
            icon: "i-ph-app-window-duotone",
            to: "/blogs/category-example",
            active: route.path.startsWith("/blogs/category-example"),
          },
          {
            label: "文章",
            icon: "i-ph-newspaper-duotone",
            to: "/blogs/category-article",
            active: route.path.startsWith("/blogs/category-article"),
          },
          {
            label: "CSS3",
            icon: "i-simple-icons-css3",
            to: "/blogs/category-css3",
            active: route.path.startsWith("/blogs/category-css3"),
          },
          {
            label: "命令",
            icon: "i-ph-command",
            to: "/blogs/category-command",
            active: route.path.startsWith("/blogs/category-command"),
          },
        ],
      },
    ];
  });

  const footerLinks = [];

  return {
    headerLinks,
    footerLinks,
  };
};

export const useNavigation = createSharedComposable(_useNavigation);
