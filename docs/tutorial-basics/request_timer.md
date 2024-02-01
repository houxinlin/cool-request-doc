---
sidebar_position: 6
title: "手动触发定时器"
---

# 手动触发定时器


手动触发定时器是Cool Request特色功能之一，他可以在运行时候，调用任意具有`@Scheduled`注解的方法，这样带来的好处是无需等待Spring自动调度，省去了开发人员调试定时器带来的麻烦。

# 使用方法

等项目启动后，在列表中选择要触发的函数名称，如果函数前面没有![SVG 图标](../images/lightning.svg)图标，则表示无法调用。
![Alt text](../images/request_timer.png)

双击方法进入调用界面，点击其中按钮即可发起调用。
![Alt text](../images/invoke_timer.png)