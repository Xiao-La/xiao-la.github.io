---
title: "Basic Cryptography - 基础密码学"
course_id: "missing-semester"
course_title: "MIT Missing Semester"
section: ""
status: "completed"
reference: false
layout: "course"
permalink: "/courses/missing-semester/basic-cryptography/"
course_page: true
doc_type: "note"
description: "MIT Missing Semester · Basic Cryptography - 基础密码学"
excerpt: "MIT Missing Semester · Basic Cryptography - 基础密码学"
---

{% raw %}

### 熵
{: #section-1 }
密码学中的 **熵（Entropy）** 单位为比特，它的值被定义为 <span class="course-math" data-tex="\log_{2}(\text{所有可能的情况数})" data-display="false"><code>\log_{2}(\text{所有可能的情况数})</code></span>。
一个密码的熵越大，就越不容易被攻击。

### 散列函数
{: #section-2 }

具有以下特性的函数叫做**散列函数（Hash Function）**：
- 确定性：确定的输入对应确定的输出。
- 不可逆性：难以从输出反推输入。
- 碰撞抵抗性：难以找到两个不同的输入对应相同的输出。
散列函数被应用于 Git 内容寻址存储，文件的信息摘要等。
还可以通过它来承诺一些内容：先公布承诺内容的哈希值，稍后再揭露承诺的内容。这样所有人都能确认你没有更改你的承诺。

### 加密
{: #section-3 }

**密钥生成函数：** 一个比较慢的函数，从较短的密码生成长度相同的，可以在其他加密算法中使用的密钥。
**对称加密：** 明文（Plain Text）和密文（Cipher Text）之间通过一个密钥（Key）可以互相得出。
**非对称加密：** 明文通过公钥（Public Key）加密为密文，而密文通过私钥（Private Key）解密为明文。也可以通过私钥生成签名，让所有拥有公钥的人都可验证签名来自私钥。
{% endraw %}
