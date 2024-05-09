---
layout: post
title: 我是如何把 Blog 从 Github Pages 迁移到云服务器上的
categories: life
description: introduction of blog removal
keywords: blog, github pages, removal
---

四月底半期考完闲得没事，考虑到自己的 Blog 使用 Github Pages 服务，导致时常无法访问，又有点折腾的欲望，遂购买了一个香港的云服务器用于部署。这个云服务器未来可能会上更多的网页应用，如果我有兴致学一些新知识的话。

### 云服务器选购和配置

对于那些主要面向国内用户的网站，自然首选国内服务器，这就存在一个备案的问题。虽然据说备案本身并不困难，但这其实加了一层拘束，比如要保持网站在线、服务器和域名都要在国内备案、要时刻小心被封禁等。

鉴于我的域名是在 Namesilo 上面买的，自然无法进行备案，也就只能选择墙外的服务器，这里选择硅云的香港服务器，最低配，活动价 219 CNY/年。只是后面由于自己开发过程遇到了些难以解决的问题，误认为服务器配置需要提升，花了一些活动价以外的冤枉钱提升带宽和内存。其实这是缺乏常识导致的额外消费，我部署的简单应用根本不需要多好的配置。总的来说这个活动价还是不错的。

根据不同的需求，可以在网上查找最新的服务器活动信息，关注优惠，毕竟小型的网站和项目迁移起来还是比较简单的，一年以后再换新的也不是什么难事。

初始化之后，几经周折，我最后使用 vscode 中的 SSH 插件来连接云服务器，这样连接的好处就是可以直接用 vscode 编辑各种文件，环境也是熟悉的，非常舒服。

安装了 nginx 等必要的软件后，就可以开始部署网站了。

### Nginx 设置

安装 git，然后使用 `git pull` 把 github 上的网页源码拉取到云服务器上。

这里我的 blog 使用 jekyll 作为生成器，所以需要先后安装 ruby 和 jekyll，这个虽然比较麻烦，但是相比于 windows 上安装还是快很多、省心很多。

安装之后在本地生成一下静态博客，可以放到 `/var/www/` 里面，作为之后配置要用的网站文件位置。

在 `/etc/nginx/nginx.conf` 的 `http` 子段中，添加：

```
	server {
		listen 80;
		server_name {域名};
		rewrite ^(.*)$  https://$host$1 permanent;
		location / {
			root {网站文件位置};
			index index.html index.htm;
		}
	}

	server {
		listen 443 ssl http2;
		server_name {域名};
		
		ssl_certificate	{证书位置};
		ssl_certificate_key	{证书位置};

		ssl_session_timeout 1d;
		ssl_session_cache shared:SSL:1m;
		ssl_session_cache shared:MozSSL:10m;
		ssl_session_tickets off;
		ssl_protocols TLSv1.2;
		ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305;
		ssl_prefer_server_ciphers on;

		location / {
			root {网站文件位置};
			index index.html index.htm;
		}
	}
```

域名可以先填服务器公网 ip 进行测试，然后把域名解析到这个公网 ip 上，再尝试访问。

这里给出的 nginx 配置文件是最简单的版本，没有针对不同网站拆分出不同的配置文件，且针对静态网站。

这里做了一个强制 https 访问。我的 ssl 证书使用了 acme.sh 进行 [freessl](https://freessl.cn) 证书的自动签发。

到这一步的过程中，好像还出现了挺多差错的，不过都通过搜索解决了。这里就不展开了。

### 同步本地 Blog 修改

这个其实有很多方法，比如说在云服务器上自己建立一个 git 远程仓库是一个不错的选择。

但我想保留 github 上面的备份，把 github 作为一个中转站，以便日后再次迁移。

于是，我找到了这样一个方案：在云服务器上创建一个 API，每次 POST 请求这个 API，就自动执行“从github上拉取”和“用jekyll渲染博客”这两件事。

然后通过 github 的 webhook 功能，可以建立一个每次 push 就 trigger 的 webhook，让他每次收到 push 就请求一下这个接口。这样就实现了自动同步。

具体实现，可以查看我参考的文章 [利用Git Webhooks实现jekyll博客自动化部署](https://developer.aliyun.com/article/680718)。

### 其他

我还用这个云服务器搭建了一个 hypixel 的加速 ip，这是一个知名的 minecraft 国际小游戏服务器。

这应该会持续运行一年左右，只需要在 minecraft 多人游戏中加入 `hypixel.joyslog.top` 即可使用。