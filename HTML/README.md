## HTML 概述

#### 什么是 HTML
HyperText Markup Language 超文本标记语言
HTML 不是编程语言，是一种描述性的标记语言
HTML 是负责描述文档语义的语言

> 标记语言是一套标记标签：网页是由网页元素组成的，这些元素是由 HTML 标签描述出来，然后通过浏览器解析，就可以呈现出来
> 编程语言是有编译过程的，而标记语言没有编译过程，HTML标签是直接由浏览器解析执行

#### HTML 页面
以下就是 html 页面骨架
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

</body>

</html>

```

#### HTML 结构
HTML 标签通常成对出现（双边标记），也有部分单标签（单边标记）
属性与标记直接、属性之间需要以空格隔开。属性值以双引号括起来。
**html骨架标签分类**
|标签名|定义|说明|
|--|--|--|
|<html></html>|HTML标签|根标签|
|<head></head>|文档头部|在head标签中必须要设置的标签是title|
|<title></title>|文档标题|网页标题|
|<body></body>|文档主体|元素包含文档的所有内容，页面内容基本放入body中|

- 文档头声明
任何一个标准的HTML页面，第一行一定是以<!DOCTYPE ...>开头的语句，这句就是文档头声明，DocType Declaration，简称DTD

- 页面语言 lang
指定语言类型： en-英语， zh-CN-中文

- 头标签 head
头标签内部的常见标签
  ```
  <title>：指定整个网页的标题，在浏览器最上方显示。
  <base>：为页面上的所有链接规定默认地址或默认目标。
  <meta>：提供有关页面的基本信息
  <body>：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
  <link>：定义文档与外部资源的关系。
  ```

  - meta 标签
  meta表示“元”。“元”配置，就是表示基本的配置项目。
    - 字符集 charset  `<meta charset="UTF-8">` ， utf-8是目前最常用的字符集编码方式，常用的字符集编码方式还有gbk和gb2312等
    - 视口 viewport ` <meta name="viewport" content="width=device-width, initial-scale=1.0">`
    - 关键词，便于 seo。`<meta name="Keywords" content="网易,邮箱,游戏,新闻,体育,娱乐,女性,亚运,论坛,短信" />`
    - 定义“页面描述”, 便于搜索引擎展示。`<meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />`

  - title 标签，seo
  - base 用于指定基础路径，指定之后，所有的 a 链接都是以这个路径为基准。

- body 标签
  属性：
  - bgcolor：设置整个网页的背景颜色。
  - background：设置整个网页的背景图片。
  - text：设置网页中的文本颜色。
  - leftmargin：网页的左边距。IE浏览器默认是8个像素。
  - topmargin：网页的上边距。
  - rightmargin：网页的右边距。
  - bottommargin：网页的下边距。
  - link：默认显示的颜色。
  - alink：鼠标点击没有松开的颜色。
  - vlink：点击完成后的颜色。
