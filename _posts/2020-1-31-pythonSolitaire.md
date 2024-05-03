---
layout: post
title: 使用Python写一个成语接龙工具
categories: python
description: python
keywords: python, pypinyin, 成语接龙, 一个顶俩, 接龙红包, 成语词典
---


前几天过年大家都发起了接龙红包，于是就想到有没有可以自动接龙的工具。

这种小脚本当然是用`python`啦。

有了思路之后Google了一下，找到了一篇关于这个的文章：

> [@dmitri喜欢喵喵喵](https://www.zhihu.com/people/laoqiu-57) : [《帮助你在成语接龙里逼死别人的工具》](https://zhuanlan.zhihu.com/p/78416952)
>
> ![Chengyu.png]({{ assets_base_url }}/images/20467337.png)

我觉得也能写出类似的小玩意出来（像那样开线程确实不敢啊哈哈），就找到了文章中用到的成语词典并下载下来——[THUOCL：清华大学开放中文词库](http://thuocl.thunlp.org/) 

[THUOCL（THU Open Chinese Lexicon）是由清华大学自然语言处理与社会人文计算实验室整理推出的一套高质量的中文词库。]: http://thuocl.thunlp.org/
[THUOCL面向国内外大学、研究所、企业、机构以及个人免费开放，可用于研究与商业。]: http://thuocl.thunlp.org/

下载下来是一个**txt文档**：

![Chengyu_1.png]({{ assets_base_url }}/images/88386728.png)

每一行都是 `成语+空格+词频` 的格式，为了实现功能，需要稍微处理一下：

![Chengyu_2.png]({{ assets_base_url }}/images/47244349.png)

```python
words = {'成语':'词频','成语':'词频', ...}#词频用于接龙时挑选使用频率最高的词语
heads = {'首字拼音':['对应的成语', ...],...}#用于根据成语首字拼音快速查找下一个词
tails = {'尾字拼音':['对应的成语', ...],...}#备用（可用于反向查找成语）
```

我使用了Python的一个拼音模块，按照拼音分类词语：`pypinyin`([Pypi文档](https://pypi.org/project/pypinyin/))

要获取一个字词(字符串格式)的拼音，只需要使用：

```python
import pypinyin
word = '一心一意'
pinyin_normal = pypinyin.pinyin(word,style=pypinyin.NORMAL)#不带声调
#pinyin_normal = [['yi'], ['xin'], ['yi'], ['yi']]
pinyin = pypinyin.pinyin(word)#带声调
#pinyin = [['yì'], ['xīn'], ['yí'], ['yì']]
```

对于接龙红包，使用不带声调的即可。

使用这个模块，就可以接龙下一个词了：

```python
from datas import words,heads
def getNext(word, israndom=False):
    tail_pinyin = pypinyin.pinyin(word, style=pypinyin.NORMAL)[-1][0]
    try:
        next_words = heads[tail_pinyin]
    except:
        return None
    if israndom:
        next_word = next_words[random.randint(0, len(next_words))]
    else:
        next_word = next_words[0]

    return next_word if next_word else False
```


有一些经验可以分享：

- 使用unicode编码**[\u4e00-\u9fa5]**可以判断字符串是否是中文。
- `sort(data, lambda x:x[1])`
- `list(next_words_sort.keys())[0]`获取了字典的第一个key(**虽然字典实际上没有顺序**)

<!--代码已重构：2020-8-14-->
Github Link:https://github.com/Xiao-La/ChengyuSolitaire
