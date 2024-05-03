---
layout: post
title: 使用Python下载辅立码课的文件
categories: python
description: python
keywords: python, fuulea
---

## 3.6

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

download_disk = ""

if __name__ == "__main__" :
    id = input("输入提取码：")
    url = "https://www.fuulea.com/class/task/download/?pin=" + id
    req = requests.get(url, headers = header)
    html = etree.HTML(req.text)
    link = html.xpath("//td[@class='download']/a/@href")[0]
    filename = download_disk + html.xpath("//tr[2]/td[1]/text()")[1].strip()
    print("正在下载 " + filename)
    wget.download(link, filename)
    os.startfile(filename)
```

其中的 `download_disk` 变量决定了下载目录，需要手动填写。

已经可以实现输入提取码后直接下载并打开本地文件，非常直接快速：

![GIF]({{ assets_base_url }}/images/anime.gif.png)

### TODO

1. 增加图形化界面。

2. 增加对多个文件的识别。

3. 增加直接打印的功能。

## 7.3

更新了对多个文件的识别。

辅立码课的提取码从**6位**变成**7位**了，不太知道是为了什么。6位可以表示 $6^{36}(\approx 10^{28})$ 个文件了，难道有什么内部规则，使得提取码之间必须不能太相似，导致可用的提取码数很少？

总之，鉴于现在的代码长度还很短，直接在这里附上新版本的代码。

```python
import requests
import wget
import os
from lxml import etree

header = {
    'user-agent': 'Mozilla/5.0(WindowsNT6.1;WOW64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/80.0.3987.163Safari/537.36'
}

base_url = "https://www.fuulea.com/class/task/download/?pin="
download_disk = ""

if __name__ == "__main__" :
    id = input("输入提取码：")
    url = base_url + id
    req = requests.get(url, headers = header)
    html = etree.HTML(req.text)
    links = html.xpath("//td[@class='download']/a/@href")
    
    if(len(links) == 1) :
        link = links[0]
        title = html.xpath("//tr[2]/td[1]/text()")[1].strip()
        filename = download_disk + title
        print("正在下载 " + filename)
        wget.download(link, filename)
        print()
        os.startfile(filename)
    else :
        download_disk = download_disk + html.xpath("//tr[1]/td[1]/text()")[0].strip() + "\\"
        os.makedirs(download_disk)
        for i in range(len(links)) :
            link = links[i]
            title = html.xpath("//tr[{num}]/td[1]/text()".format(num = i + 2))[1].strip()
            filename = download_disk + title
            print("正在下载 " + filename)
            wget.download(link, filename)
            print()
        os.startfile(download_disk)
```
