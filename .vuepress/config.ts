import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'vuepress-theme-reco',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'reco_luan',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar 侧边栏配置
    series: {
      '/docs/theme-reco/': [
        {
          text: 'module one',
          children: ['home', 'theme']
        },
        {
          text: 'module two',
          children: ['api', 'plugin']
        }
      ]
    },
    // 导航栏配置
    navbar:
    [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories/reco/1/' },
      { text: 'Tags', link: '/tags/tag1/1/' },
      { text: 'Docs',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
        ]
      },
    ],
    bulletin: {
      body: [
        {
          type: 'text',
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: 'QQ 群',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: 'GitHub',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'buttongroup',
          children: [
            {
              text: '打赏',
              link: '/docs/others/donate.html'
            }
          ]
        }
      ],
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
})





















// const sidebar = require('./utils/sidebar')

// module.exports = {
//     dest: 'dist',
//     lang: 'zh-CN',
//     title: 'seYa\'s blog',
//     description: '路的好坏不在于崎岖多少，只在于谁能最终达到目标。',
//     port: 4000,
//     // 注入到当前页面的 HTML <head> 中的标签
//     head: [
//         ['link', { rel: 'icon', href: `/logo.png` }], // 增加一个自定义的 favicon(网页标签的图标)
//         ['link', { rel: 'manifest', href: '/manifest.json' }],
//         ['meta', { name: 'theme-color', content: '#3eaf7c' }],
//         ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
//         ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
//         ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
//         ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
//         ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
//         ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
//     ],
//     // 这是部署到github相关的配置
//     base: '/',
//     markdown: {
//         lineNumbers: false, // 代码块显示行号
//     },
//     themeConfig: {
//         // 假定 GitHub。也可以是一个完整的 GitLab URL。
//         repo: 'seYaO/build.front',
//         // 自定义项目仓库链接文字
//         // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
//         // repoLabel: '贡献代码！',

//         // 以下为可选的 "Edit this page" 链接选项

//         // 如果你的文档和项目位于不同仓库：
//         // docsRepo: 'vuejs/vuepress',
//         // 如果你的文档不在仓库的根目录下：
//         docsDir: 'docs',
//         // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
//         docsBranch: 'myBlog',
//         // 默认为 false，设置为 true 来启用
//         editLinks: true,
//         // 自定义编辑链接的文本。默认是 "Edit this page"
//         editLinkText: '编辑此页',
//         lastUpdated: '上次更新',

//         nav: [ // 导航栏配置
//             // { text: '前端基础', link: '/accumulate/' },
//             {
//                 text: '技能教程',
//                 items:[
//                     // { text: 'css3和css', link: 'https://seya-skilltutorial.surge.sh/csstutorial/' },
//                     { text: 'css3和css', link: '/csstutorial/' },
//                     // { text: 'tool工具', link: 'https://seya-skilltutorial.surge.sh/tooltutorial/' },
//                     { text: 'tool工具', link: '/tooltutorial/' },
//                 ]
//             },
//             {
//                 text: 'javascript',
//                 items: [
//                     // { text: 'es6教程', link: 'https://seya-es6tutorial.surge.sh/es6tutorial/' },
//                     { text: 'es6', link: '/es6tutorial/' },
//                     // { text: 'js教程', link: 'https://seya-jstutorial.surge.sh/jstutorial/introduction/' },
//                     {
//                         text: 'js',
//                         items: [
//                             { text: '导论', link: '/jstutorial/introduction/' },
//                             { text: '语法', link: '/jstutorial/grammar/' },
//                             { text: '标准库', link: '/jstutorial/stdlib/object.html' },
//                             { text: '面向对象编程', link: '/jstutorial/oop/' },
//                             { text: '语法专题', link: '/jstutorial/advanced/single-thread.html' },
//                             { text: 'DOM 模型', link: '/jstutorial/dom/' },
//                             { text: '浏览器环境', link: '/jstutorial/bom/' },
//                             { text: 'Web API', link: '/jstutorial/htmlapi/' },
//                             { text: 'jQuery', link: '/jstutorial/jquery/' },
//                             { text: '函数库', link: '/jstutorial/library/d3.html' },
//                             { text: 'Node.js', link: '/jstutorial/nodejs/' },
//                             { text: '开发工具', link: '/jstutorial/tool/bower.html' },
//                             { text: 'webapp', link: '/jstutorial/webapp/cache.html' },
//                             { text: '附录', link: '/jstutorial/appendix/api.html' },
//                         ]
//                     }
//                 ]
//             },
//             // { text: '微博', link: 'https://baidu.com' }
//         ],
//         // 侧边栏配置
//         sidebar,
//         // 侧边栏显示2级
//         // sidebarDepth: 2,
//     }
// };