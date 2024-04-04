# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# Setup
npm install

# Development Server
npm run dev

# Production
npm run build
npm run generate
npm run preview

# 安装插件
npm install @nuxt/content
# 样式预编译器
npm install sass
# 格式化代码
npm install prettier

```

## 目录

```shell
├── .nuxt           # 开发目录 -- Nuxt 框架帮助生成的文件夹这其实就是当前运行的项目
├── .output         # 输出目录 -- Nuxt 打包后的文件目录
├── node_modules    # Node模块目录
├── src             # 项目入口
│ ├── assets          # 资产目录 -- 静态文件的存储位置 （参与打包）[通常包含：样式表（CSS、SASS 等）、字体、图片]
│ ├── components      # 组件目录
│ ├── composables     # 可组合项 -- 通过 js 逻辑目录 （hooks）
│ ├── content         # 内容模块 -- 静态文档目录 [解析 .md、.yml、.csv 和 .json 文件]
│ ├── layouts         # 布局目录
│ ├── middleware      # 中间件目录 -- 比如 auth 权限认证
│ ├── modules         # 模块目录
│ ├── pages           # 页面目录
│ ├── plugins         # 插件目录
│ ├── public          # 公共目录 -- 项目根静态资源 （不参与打包）
│ ├── server          # 服务器端目录
│ ├── utils           # 工具目录
│ └── app.vue         # 应用程序主页面
├── .env      # 环境变量文件
├── .gitignore      # git忽略配置
├── .nuxtignore     # 构建阶段忽略配置
├── app.config.ts   # App配置文件
├── nuxt.config.ts  # Nuxt 配置文件
├── package.json    # 项目包文件
├── README.md
└── tsconfig.json   # TypeScript 配置文件

```

## content 目录

```shell
├── blogs    # 博客，文章
├── docs     # 文档
└── index.md
```

## 参考链接

- [本地](http://localhost:3000/)
- [_tailwind](http://localhost:3000/_tailwind/)

- [nuxt](https://nuxt.com/)
- [nuxt中文](https://ezdoc.cn/docs/nuxtjs)
- [@nuxt/content](https://content.nuxt.com/)
- [@nuxt/ui-pro](https://ui.nuxt.com/pro)
- [@nuxt/ui](https://ui.nuxt.com/)
- [@nuxt/image](https://image.nuxt.com/)
- [devtools: { enabled: true }](https://devtools.nuxt.com/)


- [blog参考](https://juejin.cn/post/7232120266804969528)
- [踩坑记录：nuxt3 - ssg 重构我的前端导航网站](https://juejin.cn/post/7249205118533009469)
- [https://antfu.me/](https://antfu.me/)


- [令人愉快的 Nuxt3 教程 (一): 应用的创建与配置](https://juejin.cn/post/7114476679598178312)
- [令人愉快的 Nuxt3 教程 (二): 快速轻松地搭建博客](https://juejin.cn/post/7117806971226423304)

- [n命令安装及使用](https://www.jianshu.com/p/037d2af25a03)
- [iconify](https://icon-sets.iconify.design/)
