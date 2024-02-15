# apifox

Apifox 是接口管理、开发、测试全流程集成工具，Cool Request可以一键导出API到Apifox中。

需要以下两个Token。
1. HTTP  Authorization

    用于获取、添加用户自定义目录

该Token请在Web端登录后，按下F12进入开发者模式，任意选择一个请求，点击详情，在请求头中复制Authorization值。

![Alt text](image.png)

2. Open API 

    用于调用Apifox接口添加时的权限验证。

该Token请在Web端设置中或是客户端中有Apifox所生成，详细请看这里[开放API](https://apifox.com/help/openapi)

![Alt text](image-1.png)


# 配置

在可以得到上述两个Token后，您可以点击Cool Request的设置按钮，进入配置界面，复制到对应输入框即可。

:::tip
我们不会窃取您的隐私数据，所有数据均在本地进行缓存。
:::
