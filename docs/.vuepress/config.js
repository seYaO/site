const sidebar = require('./utils/sidebar')

module.exports = {
    dest: 'dist',
    lang: 'zh-CN',
    title: 'ES6 入门',
    description: ' ',
    port: 4000,
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    // 这是部署到github相关的配置
    base: '/',
    markdown: {
        lineNumbers: false, // 代码块显示行号
    },
    themeConfig: {
        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        repo: 'seYaO/site',
        // 自定义项目仓库链接文字
        // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
        // repoLabel: '贡献代码！',

        // 以下为可选的 "Edit this page" 链接选项

        // 如果你的文档和项目位于不同仓库：
        // docsRepo: 'vuejs/vuepress',
        // 如果你的文档不在仓库的根目录下：
        docsDir: 'docs',
        // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
        docsBranch: 'es6tutorial',
        // 默认为 false，设置为 true 来启用
        editLinks: true,
        // 自定义编辑链接的文本。默认是 "Edit this page"
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',

        // nav: [ // 导航栏配置
        //     {
        //         text: 'javascript',
        //         items: [
        //             { text: 'es6', link: '/es6tutorial/' },
        //         ]
        //     },
        // ],
        // 侧边栏配置
        sidebar,
    }
};