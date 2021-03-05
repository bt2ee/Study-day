## Flex 容器
Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。

文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器， 我们把一个容器的 display 属性值改为 flex 或者 inline-flex。 容器中的直系子元素就会变为 flex 元素。flex 容器中的所有 flex 元素都会有下列行为：

- 元素排列为一行 (flex-direction 属性的初始值是 row)。
- 元素从主轴的起始线开始。
- 元素不会在主维度方向拉伸，但是可以缩小。
- 元素被拉伸来填充交叉轴大小。
- flex-basis 属性为 auto。
- flex-wrap 属性为 nowrap。

#### flex-direction
主轴沿着 inline 方向延伸
- row
- row-reverse
- column
- column-reverse

#### flex-wrap
- wrap 实现换行效果，自动换行
- nowrap 初始值，会缩小子元素来适应容器

#### flex-flow
flex-direction 和 flex-wrap 的简写组合，第一个指定的值为 flex-direction ，第二个指定的值为 flex-wrap。

#### flex-grow
flex-grow 若被赋值为一个正整数， flex 元素会以 flex-basis 为基础，沿主轴方向增长尺寸。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。

#### flex-shrink
flex-shrink 属性是处理 flex 元素收缩的问题。如果我们的容器中没有足够排列 flex 元素的空间，那么可以把 flex 元素 flex-shrink 属性设置为正整数来缩小它所占空间到 flex-basis 以下。

#### flex-basis
定义了该元素的空间大小，默认值 auto，如果没有给元素设定尺寸，flex-basis 的值采用元素内容的尺寸。如果元素都设定了宽度，flex-basis 的值为该宽度。

#### Flex属性的简写
flex: flex-grow，flex-shrink，flex-basis

#### align-items
align-items 属性可以使元素在交叉轴方向对齐。

- stretch: 默认值，最高的元素填充 flex 容器。
- flex-start: flex 容器的顶部对齐
- flex-end: flex 容器的下部对齐
- center: 居中对齐

#### justify-content
justify-content 属性用来使元素在主轴方向上对齐

- stretch：默认值。位于容器的开头。
- flex-start：从容器的起始线排列
- flex-end：终止线开始排列
- center：在中间排列
- space-around：每个元素的左右空间相等
- space-between：元素之间间隔相等
