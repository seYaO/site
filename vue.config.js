let isProd = process.env.NODE_ENV === 'production'

module.exports = {
    //基本路径
    baseUrl: isProd
        ? `/myWeb/`
        : '/',

    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,

    //是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,

    // 生产环境是否生成 sourceMap 文件，一般情况不建议打开
    productionSourceMap: !isProd,

    // pages: {
    //     index: {
    //         // page 的入口
    //         entry: 'src/index/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: 'Index Page',
    //         // 在这个页面中包含的块，默认情况下会包含
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     subpage: 'src/subpage/main.js'
    // },

    // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
    devServer: {
        // host: 'localhost',
        // host: "0.0.0.0",
        // port: 8000, // 端口号
        // https: false, // https:{type:Boolean}
        // open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/ 
        // hotOnly: true, // 热更新
        // 代理
        proxy: {
            '/vacationapi': {
                target: 'https://topapi.ly.com',
                changeOrigin: true,
                // ws: true,//websocket支持
            },
            '/minapp': {
                // target: 'https://topapi.ly.com',
                target: 'http://topapi.t.ly.com',
                // target: 'http://topapi.qa.ly.com',
                changeOrigin: true,
                // ws: true,//websocket支持
            },
            '/wlfrontend': {
                target: 'https://m.ly.com',
                changeOrigin: true,
                // ws: true,//websocket支持
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    },
}