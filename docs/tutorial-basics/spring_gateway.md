---
sidebar_position: 3
title: Spring网关自动发现
---

# Spring网关

Cool Request在网关程序启动后，会自动提取网关配置的路劲，并添加到环境变量中，用户只需要更具实际修改即可。


![Alt text](../images/env_setting.png)

:::tip
此过程必须重启网关程序，如果启动后未发现自动添加到环境变量中，可手动添加。
:::