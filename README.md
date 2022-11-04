# VuePress 搭建个人博客

## 项目运行步骤

``` bash
# 安装
yarn install # 或 npm i

# 开始编写
yarn dev # 或 npm run dev

# 构建为静态文件
yarn build # 或 npm run build

# 发布
yarn deploy # 或 npm run deploy
```

## 搭建相关文档

- [搭建步骤](https://segmentfault.com/a/1190000017207205)
- [VuePress中文网](https://vuepress.vuejs.org/zh/)
- [Markdown 语法整理大集合](https://www.jianshu.com/p/b03a8d7b1719)
- [Emoji 大全](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) 

### 自定义容器

代码：

    ::: tip 提示
    this is a tip
    :::

    ::: warning 注意
    this is a tip
    :::

    ::: danger 警告
    this is a tip
    :::

效果：

::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::

### 支持 Emoji
代码：

    :tada: :100: :bamboo: :gift_heart: :fire:

效果：
:tada: :100: :bamboo: :gift_heart: :fire:



## surge.sh 托管静态文件

- 账号：1062479475@qq.com
- 密码：Wang@2019
- 使用：[https://zhuanlan.zhihu.com/p/85463405](https://zhuanlan.zhihu.com/p/85463405)
- 发布站点 (seya)[seya.surge.sh]

```bash
## CNAME配置域名，发布方式一
surge dist/

## 发布方式二
surge -d seya.surge.sh -p dist/
```