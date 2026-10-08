---
title: "Basic Cryptography - 基础密码学"
course_id: "missing-semester"
course_title: "MIT Missing Semester"
section: ""
status: "completed"
created_at: "2025-10-27T17:37:23+08:00"
updated_at: "2026-10-08T21:14:49+08:00"
reference: false
order: 3
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

密码学中的 **熵（Entropy）** 单位为比特，等可能选择时为 <span class="course-math" data-tex="\log_2(\text{所有可能的情况数})" data-display="false"><code>\log_2(\text{所有可能的情况数})</code></span>；一般为 <span class="course-math" data-tex="H=-\sum_i p_i\log_2p_i" data-display="false"><code>H=-\sum_i p_i\log_2p_i</code></span>。
一个密码的熵越大，就越不容易被攻击。


### 散列函数
{: #section-2 }


密码学散列函数（Cryptographic Hash Function）将任意长度输入映射到固定长度输出，要求具有以下特性：
- 确定性：确定的输入对应确定的输出。
- 不可逆性：难以从输出反推输入。
- 碰撞抵抗性：难以找到两个不同的输入对应相同的输出。
散列函数被应用于 Git 内容寻址存储，文件的信息摘要等。
还可以通过它来承诺一些内容：先公布承诺内容的哈希值，稍后再揭露承诺的内容。这样所有人都能确认你没有更改你的承诺。


### 加密
{: #section-3 }


**基于密码的密钥派生函数（Password-based KDF）：** 故意设计得较慢的函数，从密码和盐生成指定长度、可供其他加密算法使用的密钥。
**对称加密：** 明文（Plain Text）和密文（Cipher Text）之间通过一个密钥（Key）可以互相得出。
**非对称加密：** 明文通过公钥（Public Key）加密为密文，而密文通过私钥（Private Key）解密为明文。也可以通过私钥生成签名，让所有拥有公钥的人都可验证签名来自私钥。
{% endraw %}
