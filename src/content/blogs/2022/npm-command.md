---
title: npm、yarn
date: 2022/11/05
category: 命令
tags:
 - npm
 - yarn
---

### npm的使用说明如下：
以underscore插件为例

```bash
# 查看所有安装的包
$ npm list

# 查看underscore最新的版本
$ npm info underscore

# 查看underscore最新的版本（同 npm info underscore）
$ npm view underscore version

# 查看underscore所有的版本
$ npm view underscore versions

# 安装underscore特定版本
$ npm install underscore@1.8.0

# 查看underscore包的版本信息
$ npm ls underscore

# 查看全局中underscore包的版本信息
$ npm ls underscore -g

# 卸载underscore
$ npm uninstall underscore

# 只装生产环境的包
$ npm i --production

# 查看过期包
$ npm outdated

# 版本更新
$ npm update

# 清除缓存
$ npm cache clean --force

# 注册npm仓库账号 https://www.npmjs.com 上面的账号
$ npm adduser

# 上传包
$ npm publish

# 查看npm源：
$ npm config get registry

# 切换npm源方法一：
$ npm config set registry http://registry.npmjs.org

# 切换npm源方法二：
$ nrm use npm
```
