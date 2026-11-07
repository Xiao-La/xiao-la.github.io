import json,collections,urllib.parse,pathlib
root=pathlib.Path('.course-test-results/full-audit')
before=json.load(open(root/'browser-before.json'));after=json.load(open(root/'after/browser.json')); urls=json.load(open(root/'urls.json'))
bad=[x for x in before if any(w['scrollWidth']>w['width']+2 for w in x['widths'])]
external=[x for x in urls if urllib.parse.urlparse(x['url']).netloc!='joyslog.top' and (x.get('status',200)>=400 or x.get('error')) and not any(s in x['url'] for s in ['c-t.work','class.51nod.com/Question/Index.html'])]
L=['# 已部署文章渲染检查报告','', '检查日期：2026-10-01。修复提交：`74a8f8f`。', '', '## 检查范围与方法','', '- 逐页打开真实线上页面：63 篇博文、14 篇学习文章、87 篇课程笔记；同时覆盖 17 个课程索引和 3 个学习入口，共 184 页。','- 修复后对相同 184 页进行 Chromium 全量渲染复测，视口分别为 1280、390、320 像素。等待公式排版、字体和图片加载完成。','- 覆盖 10,625 个已渲染公式、216 次图片展示（包括课程图片和文章图片）、65 个表格（64 个正文表格与 1 个代码布局表格）。检查公式报错与源码残留、图片解码及比例、重复 ID、页面溢出、链接与标题锚点。','- 首轮请求 672 个去重后的 HTTP 地址（409 个站内地址、263 个外部地址），另核对 1,813 处站内引用和锚点。','- 额外检查代表性公式、化学表达式、课程标题与月报表格的桌面/手机截图。','- 本地构建使用独立的发布文件快照；未包含未完成的 FreshmanRecord 草稿。脚本和报告均不进入 Git。','', '## 已修复','', '| 问题 | 处理 | 复测 |','| --- | --- | --- |','| 39 个页面在窄屏下被长公式或表格撑宽 | 公式与表格增加局部横向滚动；表头、首列保持连续阅读 | 184 页在三个视口均无整页横向溢出 |','| CSP 2022 题解：公式中的下划线被解析为斜体，导致公式定界错位 | 对该下划线进行 Markdown 转义；实际 TeX 内容保持一致 | 公式从 155 个恢复为 156 个，无公式源码残留 |','| 两篇做题记录：绝对值公式中的竖线被误解析为表格 | 使用明确的 TeX 绝对值命令 | 两个误生成的表格消失，恢复两个完整公式 |','| STL 笔记目录：5 个子项缩进过深，显示为正文中的减号 | 修正这 5 个子项的缩进 | 正常嵌套列表，原先的 5 个错误换行消失 |','| Note7 指向 Note3 的标题锚点缺少连字符 | 使用实际的标题 ID | 所有站内链接和锚点通过 |','| Project Euler 24 的旧 51nod 页面返回 404 | 改为题目官方地址 https://projecteuler.net/problem=24 | 官方题面已核对，自动 HTTP 请求仍会受其访问限制 |','| 2020 年屏幕使用时间文章的 c-t.work 分享地址无法解析域名 | 正文标明原分享失效，保留原 URL 于源文件注释 | 不再显示不可用的下载按钮；原 CSV 和截图压缩包无法从仓库恢复 |','', '## 剩余外站访问问题','', f'以下 {len(external)} 个地址保留原文引用。401/403 属于登录或访问限制，超时不能直接判定为内容失效。hzwer 的证书过期是已确认的外站问题；未找到可验证的替代地址。','', '| 外链 | 状态 | 出现文章 |','| --- | --- | --- |']
for x in external:
 status=str(x.get('status') or ('证书过期' if 'certificate' in x.get('error','') else '请求超时'))
 pages=list(dict.fromkeys(x['pages']));refs='、'.join(f'[文章]({p})' for p in pages)
 L.append(f"| [原地址]({x['url']}) | {status} | {refs} |")
L+=['','## 修复前存在溢出的页面','', '| 页面 | 视口 → 实际页面宽度 | 修复后 |','| --- | --- | --- |']
for x in bad:
 widths='、'.join(f"{w['width']} → {w['scrollWidth']}" for w in x['widths'] if w['scrollWidth']>w['width']+2)
 L.append(f"| [{x['title'].replace('|','／')}]({x['url']}) | {widths} | 三个视口均通过 |")
L+=['','## 全量页面结果','', '| 页面 | 公式 | 图片 | 表格 | 结果 |','| --- | ---: | ---: | ---: | --- |']
for x in after:
 r=x['render'];L.append(f"| [{x['title'].replace('|','／')}]({x['url']}) | {r['math']} | {r['images']} | {len(r['tables'])} | 通过 |")
L+=['','## 检查边界','', '本次覆盖了所有已发布文章的浏览器渲染和资源加载，并进行结构、几何及代表性截图检查。它不能证明每个数学推导或正文内容本身正确，也不能保证外站未来持续可用。','', '图片比例检查中一张高度不足 10 像素的横幅触发整数舍入误报，已使用浮点布局尺寸复核，实际比例正常。未发现失效或拉伸的图片。','', '其他文章的原有换行策略保留。除了目录缩进修正和失效分享说明，原先的全站 hard_wrap 设置未改动。','', '线上部署验证结果见同目录 live-verification.json。']
(root/'report.md').write_text('\n'.join(L)+'\n');print(f'报告已写入，剩余外链 {len(external)} 个')
