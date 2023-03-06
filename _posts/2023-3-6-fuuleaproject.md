---
layout: post
title: 使用Python下载辅立码课的文件
categories: python
description: python
keywords: python, fuulea
---

自从使用 Python 的 Manim 库制作数学视频后，就很久没碰 Python。

近期学校的信息课开始教 Python。内容都比较简单，上课只想睡觉。

学校强制要求使用平板，并经常在平板的软件《辅立码课》上发布文件，有时需要下载与打印。

所以考虑用 Python 写一个脚本，便于直接下载这个软件的文件。

### 当前版本

以下是这个脚本的当前版本：

```python
import requests
import wget
import os
from lxml import etree

header = {
    'user-agent': 'Mozilla/5.0(WindowsNT6.1;WOW64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/80.0.3987.163Safari/537.36'
}

if __name__ == "__main__" :
    id = input("输入提取码：")
    url = "https://www.fuulea.com/class/task/download/?pin=" + id
    req = requests.get(url, headers = header)
    html = etree.HTML(req.text)
    link = html.xpath("//td[@class='download']/a/@href")[0]
    filename = "F:\\Code\Python\\fuulea\\downloads\\" + html.xpath("//tr[2]/td[1]/text()")[1].strip()
    print("正在下载 " + filename)
    wget.download(link, filename)
    os.startfile(filename)
```

已经可以实现输入提取码后直接下载并打开本地文件，非常直接快速：

![GIF]({{ site.url }}/images/anime.gif)

### TODO

1. 增加图形化界面。

2. 增加对多个文件的识别。

3. 增加直接打印的功能。