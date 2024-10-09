---
sidebar_position: 2
title: 调用任意方法
---

Cool Request支持在SpringBoot运行时调用任意容器内实例的方法、同时也包括静态方法。

##  使用方法

在想要调用的方法体内右击，选择CoolRequest->Call this Method

![Alt text](../images/call_this_method.png)


接着点击运行按钮即可。

![Alt text](../images/call_this_method_1.png)

当然，Cool Request支持大量常见的参数传递

![Alt text](../images/call_this_method_2.png)
![Alt text](../images/call_this_method_3.png)

### 前后置脚本

如果想在调用前/后执行自定义代码，如想更改某个对象属性，可编写脚本。
![Alt text](../images/call_this_method_script.png)
