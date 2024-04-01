---
title: n 命令使用
date: 2024/04/01
---

# n 命令使用

## 1、安装n
安装brew

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

用brew安装n

```bash
brew install n
```

## 2、安装node.js

2.1 设置node.js国内镜像

```bash
// 阿里云镜像源
echo 'export N_NODE_MIRROR=https://npmmirror.com/mirrors/node/' >> ~/.bashrc
// 腾讯云镜像源
echo 'export N_NODE_MIRROR=https://mirrors.cloud.tencent.com/nodejs-release/' >> ~/.bashrc
// 中国科学技术大学镜像源
echo 'export N_NODE_MIRROR=https://mirrors.ustc.edu.cn/node/' >> ~/.bashrc
```

2.2 安装node.js

```bash
// 安装Node.js最新LTS版
n lts
// 安装Node.js最新版
n current
```

2.3 安装成功后查看

```bash
node -v
npm -v
```

2.4 配置NPM仓库国内镜像源


```bash
// npm仓库阿里云源
npm config set registry=https://registry.npmmirror.com
// npm仓库腾讯云源
npm config set registry=https://mirrors.cloud.tencent.com/npm/
// npm仓库华为云源
npm config set registry=https://mirrors.huaweicloud.com/repository/npm/
```

3、n常见命令使用

```bash
// 查看n帮助
n --help 或 n -h 

// 查看n版本
n --version 或 n -V

// 查看本机已安装的node版本
n ls

// 使用或安装最新的LTS官方版本
n lts

// 使用或安装稳定的官方发布
n stable

// 安装Node.js最新版本
n current 或 n latest

// 安装Node.js指定版本
n 20.1.0

// 查看所有已下载的Node.js版本并可通过上下键选择安装
n

// 查看所有已下载的Node.js版本
n ls

// 查看已下载的指定Node.js版本路径
n which 20.1.0

// 移除已下载的指定Node.js版本
n rm 20.1.0

// 移除已下载的全部Node.js版本(除了当前正在使用的Node.js版本)
n prune

// 移除当前正在使用的Node.js和npm
n uninstall
```

::tip
安装n时，mac 不要忘记加sudo。
:: 

