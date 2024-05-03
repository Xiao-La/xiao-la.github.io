---
layout: post
title: 如何使用Github Pages免费搭建一个blog？
categories: life
description: 搭建blog
keywords: about, blog, github, free, 免费, githubpages
---





这篇文章是我搭建这个Blog的过程和踩的坑，基本上都是白嫖的XD。

------

目录：

- [注册github账号](#注册github账号)
- [挑选一个你喜欢的*BLOG*模板](#挑选一个你喜欢的blog模板)
- [配置你的*BLOG*](#配置你的blog)
- [如何更改为顶级域名页面？](#如何更改为顶级域名页面)
- [其他](#其他)

------

### 注册github账号

打开github的 [*官网*](www.github.com)  即可看到醒目的注册框。

注：`username` [*用户名* ]（这将会成为你的二级域名： *username.github.io*）

------



### 挑选一个你喜欢的*BLOG*模板

去你的搜索引擎搜索 Github Pages 的blog模板，直到你找到你喜欢的blog样式。

> 注意：使用Github Pages搭建blog通常使用 ***jekyll*** 或 ***hexo*** 实现。

推荐网站: **[JekllThemes](http://jekyllthemes.org/)** 

通常，你会得到一个 github 的链接。

**不要忘记标明模板来源。**

------



### 配置你的*BLOG*

如果你得到的是一个来自 github.com 的Github Pages模板，你只需要点击页面中的`Fork`按钮即可。

![2019-11-13-1.png]({{ assets_base_url }}/images/36076488.png)

Fork后，打开你仓库里的那份fork的设置（Setting）。

将Repository name修改为 Username.github.io（同理，Username为你的用户名）

![2019-11-13-2.png]({{ assets_base_url }}/images/11257534.png)

等待一会儿，打开username.github.io，**你应该就可以看到一个页面了**。

> 如果你得到不是github上的模板，你可以下载后在github上传，并照以上方法修改仓库名。
>

如果可以打开，接下来就可以配置你的blog了。

你可以阅读它的**操作手册**，请按照上面修改其中的配置文件；

如果没有，你可以参照文字一个个修改，或花费一些精力看看[**Jekyll的官方文档**](https://jekyllrb.com/) ，多学一份知识。

------

至此，打开username.github.io 应该已经可以看到一个blog的页面了，但它还缺少内容。

**Markdown**是编写博文的**最简单的方式**。

在这里，有一份可以用于编写**Markdown**的指南（搬运自mzlogin）：[链接](http://xiao-la.tk/2019/11/13/%E4%B8%8D%E6%9D%83%E5%A8%81Markdown%E6%8C%87%E5%8D%97/)

------

### 如何更改为顶级域名页面？

`xxxx.github.io` 是一个二级域名。想把它改为`xxx.com` `xxx.cn`等顶级域名？(就像 xiao-la.tk 一样)

Github Pages为此提供了很好的支持，使得它非常简单。

购买一个域名，在[**阿里云**](www.aliyun.com) 、[**腾讯云**](https://cloud.tencent.com/)上都可以简单的买到（首年都很便宜）。

> 搜索“freenom”，可以获取到一个免费的.tk、.ml 等顶级域名（这是目前**唯一的免费域名服务商**）
>

有了域名之后，在你在github的blog仓库里添加一个名叫`CNAME`的文件，**没有后缀名**。

在里面添加一行 你的域名，如：`xiao-la.tk`

**需要注意的是：只要顶级域名。(比如 baidu.com)**

然后，**搜索各自域名服务商的DNS解析方法**，添加一下两个记录(freenom的dns解析复杂些，可以参照[这篇文章](https://lfei.life/chdnsserver-of-freenom/)转到dns.com后解析)：

| 主机记录 | 类型  |       记录值       |
| :------: | :---: | :----------------: |
|   www    | CNAME | username.github.io |
|    @     | CNAME | username.github.io |

等待十分钟左右解析生效，此时打开你的域名应该就是你的blog页面了。

-----
### 其他

> 2020-9-11更新

Github Pages现在在部分地区无法访问，能访问的地区也很慢。

我现在已经无法访问 http://xiao-la.github.io/ 了，但是访问 https://joyslog.top 就暂时没问题，所以暂时没有搬迁的想法。

如果你也遇到了类似问题，可以尝试使用 `Gitee Pages` 或 `Coding Pages`。如果想加速 `Github Pages` ，可以使用 **CDN加速**。

祝你成功搭建自己的Blog。