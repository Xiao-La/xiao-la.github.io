# Obsidian 课程发布

Obsidian 是正文的编辑源，博客保存可直接由 GitHub Pages 构建的导出结果。
无需在 GitHub 上安装 Python、Obsidian 插件或额外 Jekyll 插件。

## 同步范围

`scripts/courses.json` 按原始 README 的顺序，把 11 类已完成课程和 6 类更新中的课程映射到实际文件或目录。
上、下学期的大学物理和高等数学分别作为同一课程的两个分组。
覆盖范围包括 README 标注的期末复习、期中复习和少量草稿。

本次导出含 80 篇课程笔记、7 篇被引用的证明或公式表、163 张引用图片和 2 份课程 PDF。
课程总目录分成“已完成”和“还在更新”；课程页和正文也显示状态。
生命科学概论目录内的“总复习”和“考前速记”PDF 在课程页提供下载。
未被引用的图片和 `.obsidian` 设置不在发布范围内。
从已列出课程链接到 README 范围外的课程会报错，避免悄悄扩大发布范围。

## 文件与入口

- `scripts/sync_courses.py`：依赖 Python 3 标准库的同步命令；超过 50KB 的 PNG/JPEG 用 `cwebp`（`brew install webp`）以 q90 转成 WebP 发布，压缩不足 10% 的保留原图。转码结果按源文件哈希缓存在已忽略的 `.course-cache/`，Obsidian 中的原图不变。
- 笔记的创建时间取源文件的创建时间，更新时间取修改时间。编辑器或同步盘整体重写文件会重置创建时间，所以已发布过的笔记沿用 `_courses/` 中更早的 `created_at`。
- `scripts/courses.json`：课程范围映射。只修改这里和原始笔记，不编辑生成正文。
- `_courses/`：生成的课程索引、正文和补充材料。URL 在 front matter 中显式指定。
- `_data/courses.json`、`_data/course_references.json`：生成的目录数据。
- `assets/courses/`：复制引用附件和已完成课程目录内的 PDF，保留原始目录，URL 编码空格和中文。
- `reports/courses-sync.json`：生成文件清单、引用关系和转换计数，不对外发布。
- `_layouts/course*.html`、`css/courses.css`、`js/courses.js`：阅读页面、目录和渲染。
- `assets/vendor/`：固定版本的 MathJax（完整包自带化学扩展）、pseudocode.js、Waline 和 ECharts，附上游许可证。

课程入口为 `/courses/`，每门课程有独立章节目录。
课程页面加入站内搜索和 sitemap，不进入博客文章归档或文章 RSS。
单篇正文有可折叠目录和同课程上一篇/下一篇链接。

## 语法转换

转换先保护代码块和行内代码，然后处理数学与 Obsidian 链接。
代码中的 Python 二维列表与 Java 双大括号不会被当作链接或 Liquid 变量。

| 源语法 | 网页输出 |
| --- | --- |
| `[[笔记名]]`、别名 | 解析实际 Markdown 文件并转换成课程地址 |
| `![[图片.png\|320]]` | 图片、替代文本、尺寸和懒加载 |
| 同名图片与证明 | 无扩展名链接优先选笔记，明确图片扩展名选附件 |
| 标题链接与 Markdown 本页目录 | 映射到显式 `section-N` 锚点 |
| `^block-id` 和块链接 | `block-block-id` 网页锚点 |
| `$…$`、`$$…$$` | 原始 TeX 存在 HTML 属性中，避免 Markdown 消耗反斜线、下划线或表格分隔符 |
| `\ce{…}` | MathJax 完整包自带的 mhchem |
| `pseudo` 代码块 | LaTeX 风格的伪代码及行号，数学符号使用 SVG |
| `image-layout-a` | 桌面并排、手机纵向图片布局 |
| `==高亮==`、`%%注释%%` | `<mark>`、去除注释 |
| Markdown 表格 | 补充块间空行；表格外的竖线保持为普通文字，避免被 kramdown 误判成表格 |

公式和代码用 Liquid raw 块保护；内部链接与图片地址仍使用 `relative_url`，支持站点 `baseurl`。
长公式、表格和伪代码在自身区域内横向滚动，避免撑宽手机页面。
如果公式或伪代码解析失败，网页保留可读源文本，浏览器测试会将其视为失败。

脚本遇到缺失或歧义目标、重复公开地址、未支持的附件或插件块会停止。
当前课程没有 callout、Dataview、Mermaid 或笔记嵌入；这些语法不能据此视为已经兼容。
已有笔记内容未做学术校对或改写。

数理逻辑的考试复习原文目录有“7. 综合练习题”链接，但正文没有这个章节。
导出保留目录文字并去掉失效链接，在同步报告的 `warnings` 中记录；未补写原文内容。

## 日常运行

```sh
python3 scripts/sync_courses.py
python3 scripts/sync_courses.py --check
JEKYLL_ENV=production bundle exec jekyll build
```

默认读取 `~/Documents/Obsidian Vault`，可通过 `--vault` 指定其他位置。
`--check` 只检查导出是否与源笔记一致，不写文件。
脚本先完成引用和语法验证，再写入；更新或删除文件只依据上次生成清单处理。
README 任一课程列表变更时需要显式更新课程映射。笔记文件名决定默认地址，重命名前应考虑旧链接的重定向。

## 验证

转换回归测试：

```sh
python3 -m unittest discover -s tests -p 'test_*.py'
```

浏览器测试需要 Node.js 和 Playwright；只作为开发检查依赖：

```sh
npm install --prefix tests
cd tests
npx playwright install chromium
cd ..
```

先完成生产构建，然后开一个终端提供预览：

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory _site
```

另一个终端运行：

```sh
npm test --prefix tests
```

测试逐页检查全部 87 篇正文的公式、图片、伪代码、链接及锚点，并检查 390px 手机宽度。
还验证 17 门课程目录、PDF 下载、站内搜索、代码原文和 MathML 辅助内容不会重复显示。
测试阻断外部网络请求，确保课程渲染不依赖 CDN。
输出 `.course-test-results/report.json` 与桌面、手机截图；目录已加入 Git 忽略。
可用 `COURSES_TEST_URL` 和 `COURSES_TEST_OUTPUT` 更改预览地址与检查输出位置。

## Git 范围

同步脚本与课程映射、测试、维护文档、同步报告和检查输出仅保存在本地，已加入 `.gitignore`。
Git 保存生成的 `_courses/`、目录数据、引用附件、模板、样式和浏览器渲染所需 JavaScript 与库。
课程目录数据中不含本地同步源路径或范围映射。博客构建不依赖同步工具。
