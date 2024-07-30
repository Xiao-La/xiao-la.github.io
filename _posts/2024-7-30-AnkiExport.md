---
layout: post
title: Anki 解决多种卡片模板导出网页：给插件修 BUG
categories: life
description: Anki Export
keywords: anki, export, html, javascript
---

近期使用 Anki 这个间隔重复记忆软件非常频繁，在里面积累了大量卡片。考虑到备考以及无法使用电子设备的情况，也考虑到将来分享笔记的需要，我找到了 Anki 2.1 可用的一个插件：[Export deck to HTML](https://ankiweb.net/shared/info/1897277426)。

随便找了个模板，转换卡片类型单一、没有数学公式的牌组固然很好，但复杂一点的就出现问题了。

怎么办呢？首先我发现如果直接在模板里写死各种字段，若当前卡片没有找到这个字段，会出现提示 “## field ... not found ##”

这个就是插件本身的问题了。正好 Anki 的插件是用 python 编写的，遂直接找源代码进行修改。

这个插件位于 `C:\Users\用户名\AppData\Roaming\Anki2\addons21\1897277426\ExportDeckToHtml.py`，我们搜索找到产生提示的子段

```python
try:
    value = card.note()[field[2:-2]]
    key += value
except KeyError:
    value = '## field ' + field + ' not found ##'
```

直接改成

```python
try:
    value = card.note()[field[2:-2]]
    key += value
except KeyError:
    value = ''
```

并且我发现在导出含图片的卡片时，出现了一些 bug，图片会把文字内容覆盖掉。查阅了插件的实现之后，我发现这又是插件写法的问题。
插件作者是用如下代码处理图片的：

```python
pictures = re.findall(r'\<img src="(.*?)"', value)
if len(pictures):
    img_tmp = '<img src="%s">'
    value = ""
    for pic in pictures:
        full_img_path = join(
            collection_path, pic)
        img_tag = img_tmp % full_img_path
        value += img_tag
    key += value
    content += value
card_html = card_html.replace(field, value)
```

`value` 变量本来存着这个字段的所有信息，这样处理一下，`value` 当然就变成只剩图片了。

这段代码的原逻辑有点不好改，用处就是把 Anki 卡片里存的图片的相对路径，改成绝对路径。

作者可能也是对正则表达式不熟练，只能这样粗糙地处理。其实，只要把这一整段改成下面两句即可。

```python
value = re.sub('(?<=\<img src=").*?(?=")', lambda matched : join(collection_path, matched.group(0)), value)
card_html = card_html.replace(field, value)
```

这样效果很完美。

然后在模板网页里用 javascript 和 css 简单处理一下表格的着色、数学公式的渲染、填空题的显示，即可完成。

```html
<head>
    <meta charset="UTF-8">
    <script type="text/x-mathjax-config">
        MathJax = {
            tex: {
              inlineMath: [['$', '$'], ['\\(', '\\)']]
            },
            svg: {
              fontCache: 'global'
            }
          };
        </script>
        <script type="text/javascript" id="MathJax-script" async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
        </script>
    <style>
        table {
            font-family: "Book Antiqua", "宋体";
            font-size: 13px;
            color: #000000;
            border-width: 1px;
            border-color: #000000;
            border-collapse: collapse;
            width: 100%;
        }
        @media print {
            tr:nth-child(odd){
                background-color: #dfdfdf ;
            }
        }    
        tr:nth-child(odd){
            background-color: #dfdfdf ;
        }
        td, th {
            border-width: 1px;
            padding: 8px;
            border-style: solid;
            border-color: #000000;
        }

        img {
            max-width: 50%;
            height: auto;
        }
    </style>
    <script>
        window.onload = function() {
            var bs = document.getElementsByTagName("span");
            for(var i = 0; i < bs.length; i++) {
                if(bs[i].style.backgroundColor != "") {
                var par = bs[i].parentNode;
                    bs[i].style.backgroundColor = par.style.backgroundColor;
                }
            }
            var texts = document.getElementsByTagName("td");
            for(var i = 0; i < texts.length; i++) {
                var text = texts[i].innerHTML;
                var rep = text.replace(/{{c[1-9]::(.*?)}}/g, "<p style=\"color: rgb(0, 0, 255); display: inline; text-decoration: underline; \">$1</p>");
                texts[i].innerHTML = rep;
            }
        }
    </script>
</head>

<body>
    <table>
        <tr>
            <td>{{正面}}{{文字}}{{Text}}</td>
            <td>{{背面}}{{背面额外}}</td>
        </tr>
    </table>
</body>
```

最后贴一张解决了上述各种坑点的效果图：

![](https://s2.loli.net/2024/07/31/2iokgMV9xnSJqjQ.png)

