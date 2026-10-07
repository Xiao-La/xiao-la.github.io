# Joy's Blog

基于 Jekyll 和 GitHub Pages 的个人博客，主题样式修改自
[jekyll-theme-solid](https://github.com/mzlogin/jekyll-theme-solid)。

## 本地开发

项目使用 Ruby 3.3（具体版本见 `.ruby-version`）和 Bundler：

```sh
bundle install
bundle exec jekyll serve --livereload
```

访问 <http://127.0.0.1:4000> 预览。提交前执行一次生产构建：

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

## 目录结构

- `_posts/`：博客文章
- `_study/`：不会进入博客归档的学习内容集合
- `_layouts/`：页面类型；均复用 `default.html` 页面骨架
- `_includes/`：导航、页头、页脚、评论等可复用组件
- `_data/`：导航等结构化站点数据
- `pages/`：关于、分类、学习列表和 404 等独立页面
- `css/`、`js/`、`images/`：静态资源

站点级信息、插件和第三方服务统一在 `_config.yml` 中配置。

文章中的 `description` 应填写具体摘要，`keywords` 用于站内搜索。
含数学公式的文章请在 front matter 中设置 `math: true`，以按需加载本地 MathJax。
课程笔记由同步工具自动处理公式和图片尺寸。
分类的内部名称保持兼容，展示名称在 `_data/categories.yml` 中维护。
