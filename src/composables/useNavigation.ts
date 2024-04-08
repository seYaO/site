import { createSharedComposable } from "@vueuse/core";

const _useNavigation = () => {
  const headerLinks = computed(() => {
    const route = useRoute();

    return [
      {
        label: "文档",
        icon: "i-ph-book-bookmark-duotone",
        to: "/docs",
        search: false,
        children: [
          {
            label: "HTML 教程",
            description: "本教程完整介绍 HTML 语言的所有内容，既可以当作初学者的入门教程，也可以用作参考手册查阅语法。",
            icon: "i-ph-file-html ",
            to: "/docs/htmltutorial",
            active: route.path.startsWith("/docs/htmltutorial"),
          },
          {
            label: "JavaScript 教程",
            description: "本教程全面介绍 JavaScript 核心语法，覆盖了 ES5 和 DOM 规范的所有内容。",
            icon: "i-simple-icons-javascript",
            to: "/docs/jstutorial",
            active: route.path.startsWith("/docs/jstutorial"),
          },
          {
            label: "ES6 教程",
            description: "全面介绍 ECMAScript 6 新引入的语法特性。",
            icon: "i-ph-code",
            to: "/docs/es6tutorial",
            active: route.path.startsWith("/docs/es6tutorial"),
          },
          {
            label: "TypeScript 教程",
            description: "TypeScript 开源教程，介绍基本概念和用法，面向初学者。",
            icon: "i-ph-code",
            to: "/docs/tstutorial",
            active: route.path.startsWith("/docs/tstutorial"),
          },
          {
            label: "Web API 教程",
            description: "Web API 教程，提供各种浏览器 API 文档，正在建设中。",
            icon: "i-ph-code",
            to: "/docs/webapi",
            active: route.path.startsWith("/docs/webapi"),
          },
          {
            label: "C 语言教程",
            description: "C 语言入门教程。",
            icon: "i-ph-code",
            to: "/docs/clang",
            active: route.path.startsWith("/docs/clang"),
          },
          {
            label: "Bash 脚本教程",
            description: "本教程介绍 Linux 命令行 Bash 的基本用法和脚本编程。",
            icon: "i-simple-icons-gnubash",
            to: "/docs/bash",
            active: route.path.startsWith("/docs/bash"),
          },
          {
            label: "SSH 教程",
            description: "SSH 是 Linux 系统的登录工具，现在广泛用于服务器登录和各种加密通信。",
            icon: "i-ph-code",
            to: "/docs/ssh",
            active: route.path.startsWith("/docs/ssh"),
          },
          {
            label: "前端八股文",
            description: "高级前端知识点，侧重于问题点，解决方案。主要有`浏览器``基础``样式``网络``前端工程化``框架``算法`等",
            icon: "i-ph-chats-teardrop-duotone",
            to: "/docs/learntutorial",
            active: route.path.startsWith("/docs/learntutorial"),
          },
        ],
      },
      {
        label: "博客",
        icon: "i-ph-newspaper-duotone",
        to: "/blogs",
      },
    ];
  });

  const footerLinks = [
    {
      label: "Community",
      children: [
        {
          label: "Nuxters",
          to: "https://nuxters.nuxt.com",
          target: "_blank",
        },
        {
          label: "Nuxt on GitHub",
          to: "https://github.com/nuxt",
          target: "_blank",
        },
        {
          label: "Team",
          // to: "/team",
        },
        {
          label: "Design Kit",
          // to: "/design-kit",
        },
      ],
    },
    {
      label: "Enterprise",
      children: [
        {
          label: "Support",
          // to: "/enterprise/support",
        },
        {
          label: "Agencies",
          // to: "/enterprise/agencies",
        },
        {
          label: "Jobs",
          // to: "/enterprise/jobs",
        },
        {
          label: "Sponsors",
          // to: "/enterprise/sponsors",
        },
      ],
    },
    {
      label: "Solutions",
      children: [
        {
          label: "Nuxt Content",
          to: "https://content.nuxt.com/",
          target: "_blank",
        },
        {
          label: "Nuxt DevTools",
          to: "https://devtools.nuxt.com/",
          target: "_blank",
        },
        {
          label: "Nuxt Image",
          to: "https://image.nuxt.com/",
          target: "_blank",
        },
        {
          label: "Nuxt UI",
          to: "https://ui.nuxt.com/",
          target: "_blank",
        },
      ],
    },
  ];

  const searchLinks = computed(() => [
    ...headerLinks.value
      .map(link => {
        // Remove `/docs` and `/enterprise` links from command palette
        if (link.search === false) {
          return {
            label: link.label,
            icon: link.icon,
            children: link.children,
          };
        }

        return link;
      })
      .filter(Boolean),
    {
      label: "Team",
      icon: "i-ph-users-duotone",
      // to: "/team",
    },
    {
      label: "Design Kit",
      icon: "i-ph-palette-duotone",
      // to: "/design-kit",
    },
    {
      label: "Newsletter",
      icon: "i-ph-envelope-simple-duotone",
      // to: "/newsletter",
    },
  ]);

  const searchGroups = [
    {
      key: "modules-search",
      label: "Modules",
      search: async q => {
        if (!q) {
          return [];
        }

        const { modules, fetchList } = useModules();
        if (!modules.value.length) {
          await fetchList();
        }

        return modules.value
          .filter(module =>
            ["name", "npm", "repo"]
              .map(field => module[field])
              .filter(Boolean)
              .some(value => value.search(searchTextRegExp(q)) !== -1),
          )
          .map(module => ({
            id: `module-${module.name}`,
            label: module.name,
            suffix: module.description,
            avatar: {
              src: moduleImage(module.icon),
            },
            to: `/modules/${module.name}`,
          }));
      },
    },
    {
      key: "hosting-search",
      label: "Hosting",
      search: async q => {
        if (!q) {
          return [];
        }

        const { providers, fetchList } = useHostingProviders();
        if (!providers.value.length) {
          await fetchList();
        }

        return providers.value
          .filter(hosting =>
            ["title"]
              .map(field => hosting[field])
              .filter(Boolean)
              .some(value => value.search(searchTextRegExp(q)) !== -1),
          )
          .map(hosting => ({
            id: `hosting-${hosting._path}`,
            label: hosting.title,
            suffix: hosting.description,
            icon: hosting.logoIcon,
            avatar: hosting.logoSrc
              ? {
                  src: hosting.logoSrc,
                }
              : undefined,
            to: hosting._path,
          }));
      },
    },
    {
      key: "articles-search",
      label: "Articles",
      search: async q => {
        if (!q) {
          return [];
        }

        const { articles, fetchList } = useBlog();
        if (!articles.value.length) {
          await fetchList();
        }

        return articles.value
          .filter(article => article.title.search(searchTextRegExp(q)) !== -1)
          .map(article => ({
            id: `article-${article._path}`,
            label: article.title,
            suffix: article.description,
            icon: "i-ph-newspaper",
            to: article._path,
          }));
      },
    },
  ];

  const categoryLinks = [
    {
      label: "示例说明",
      icon: "i-ph-app-window-duotone",
      to: "/category/example",
    },
    {
      label: "文章",
      icon: "i-ph-newspaper-duotone",
      to: "/category/article",
    },
    {
      label: "CSS3",
      icon: "i-simple-icons-css3",
      to: "/category/css3",
    },
    {
      label: "命令",
      icon: "i-ph-command",
      to: "/category/command",
    },
  ];

  return {
    headerLinks,
    footerLinks,
    searchLinks,
    searchGroups,
    categoryLinks,
  };
};

export const useNavigation = createSharedComposable(_useNavigation);
