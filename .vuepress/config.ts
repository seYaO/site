import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import sidebar from './utils/sidebar'

export default defineUserConfig({
    title: 'seYa\'s blog',
    description: '路的好坏不在于崎岖多少，只在于谁能最终达到目标。',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    // 这是部署到github相关的配置
    base: '/',
    theme: recoTheme({
        style: '@vuepress-reco/style-default',
        logo: '/logo.png',
        author: 'seYaO',
        // 如果你的文档和项目位于不同仓库：
        // docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
        // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
        docsBranch: 'master',
        // 如果你的文档不在仓库的根目录下：
        docsDir: 'example',
        lastUpdatedText: '最近更新',
        // series 为原 sidebar 侧边栏配置
        series: sidebar,
        // subSidebar: 'auto',
        // 导航栏配置
        navbar:
            [
                { text: '首页', link: '/' },
                // { text: '分类', link: '/categories/reco/1/' },
                // { text: '标签', link: '/tags/tag1/1/' },
                {
                    text: '常用',
                    children: [
                        { text: 'CSS3', link: '/blogs/skill/css3/' },
                        { text: '工具', link: '/blogs/skill/tool/' },
                    ]
                },
                {
                    text: '文档',
                    children: [
                        { text: 'ES6', link: '/docs/es6tutorial/' },
                        { text: 'JavaScript', link: '/docs/jstutorial/' },
                        { text: 'HTML', link: '/docs/htmltutorial/' },
                        { text: 'Web API', link: '/docs/webapi/' },
                        { text: 'C语言', link: '/docs/clang/' },
                        { text: 'Bash', link: '/docs/bash/' },
                        { text: 'SSH', link: '/docs/ssh/' },
                        { text: 'flutter', link: '/docs/flutter/' },
                        { text: '八股文', link: '/docs/learntutorial/' },
                    ]
                },
            ],
        bulletin: {

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