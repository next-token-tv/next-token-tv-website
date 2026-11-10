---
locale: zh-Hans
episodes:
  - next-token-weekly--006
status: published
publishedAt: '2026-11-10'
title: '从识别一张图，到跟上手里的物体'
description: '模型能返回物体位置以后，摄像头、坐标和画面更新时间开始决定体验。一个实时画框 Demo，怎样从静态识别走向连续交互？'
updatedAt: '2026-10-26'
---

摄像头看着手里的物体，程序为它画框，再把选中的内容交给重绘；物体移动，画面也跟着更新。第六期介绍过这样的试验，没有给出帧率或延迟测量。这个动作很适合暴露实时视觉的一类问题：模型认出的东西，是否还在刚才的位置？

## 先让框落到正确的位置

要把识别结果画出来，程序需要坐标。以 [Gemini 的图像理解接口](https://ai.google.dev/gemini-api/docs/image-understanding#object-detection)为例，边界框示例采用 `[ymin, xmin, ymax, xmax]`，坐标相对图像尺寸归一化到 0–1000。显示时需要按原图宽高换算；这是该接口的约定，不能套到所有模型上。

模型看到裁剪后的图片、界面却显示整张图时，还要补上裁剪偏移。画面缩放或镜像显示，也会改变坐标对应关系。一个固定偏向左上的框，可能只是转换出了问题，无须先换模型。

可以先拿静态图片验证这些变换。框的位置正确后再接摄像头，便能把坐标错误和时间错误分开查。

边界框本身只是矩形，里面可能还包含手指和背景。若重绘要求只替换物体轮廓，就需要更精细的区域选择；画框准确并不代表分割已经完成。

## 结果返回时，手已经移开了

假设某帧里杯子在左边，识别返回时杯子已被移到右边。把旧坐标叠到当前画面，即使识别完全正确，看起来也像跟踪失败。

每次请求应带上它所对应的帧标识，结果回来后先核对。浏览器的 [`requestVideoFrameCallback()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)提供视频帧回调和时间元数据，可帮助关联帧；它本身不会补偿识别耗时，也不能笼统当成所有视频源的摄像头采集时钟。

对已经过时的结果，可以显示带标注的原帧，也可以丢弃并等待较新的结果。前一种适合让用户停下来确认对象，后一种更接近持续更新的画面。若请求不断排队，结果会越来越落后，单次处理速度稳定也无济于事。需要限制积压，避免把每个旧帧都处理完才轮到当前画面。

持续跟随还可以尝试另一种实现：模型负责识别对象，相邻帧之间由跟踪机制更新位置，需要时再重绘。这是可选的实现方式，不能据节目演示判断它实际采用了哪套方案。

不管用哪种实现，都值得试几次容易失败的动作：先把物体停住，再快速移出画面，换一个物体回来。旧框是否消失、换了对象后是否重新识别，比一张成功截图更能说明交互目前做到哪一步。

## 相关资料

- [将物体画框接入交互玩法的试验](/weekly/006/transcript#quote-9288bb56f08a2927b7bb)
- [手持物体移动与重绘的具体描述](/weekly/006/transcript#quote-4d51c5e5481b38adc870)
- [Google：Image understanding — Object detection](https://ai.google.dev/gemini-api/docs/image-understanding#object-detection)，查阅于 2026 年 10 月 26 日。
- [MDN：HTMLVideoElement.requestVideoFrameCallback()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)，查阅于 2026 年 10 月 26 日。
