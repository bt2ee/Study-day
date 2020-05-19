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
