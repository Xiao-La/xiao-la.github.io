---
layout: post
title: 苹果生态和安卓手机日历双向同步解决方案
categories: life
description: solution of syncing android and icloud calender
keywords: calender, android, apple, icloud, mac
---

近期有这个需求，因为有时在使用 Macbook 和 iPad 的日历看各种活动和作业 Deadline，又需要在安卓的手机上随时添加和查看。

其实很容易解决，只需要使用一个叫 [DAVx⁵](https://www.davx5.com/) 的开源软件即可。

在 [Apple 账户](https://account.apple.com/) 管理页面中添加一个应用密码，再在 DAVx⁵ 中选择 “使用 URL 和用户名登录”，URL 填写 `https://icloud.com`，账号填写 iCloud 账户， 密码填写刚才的应用密码，即可同步。

接下来注意如果要把安卓手机本地的日历同步到 iCloud，需要在日历软件中使用 iCloud 账户下的分类新增日程。

原来在手机上的日程无法自动同步。

效果大概是这样：

![]({{ assets_base_url }}/images/Calender.png)