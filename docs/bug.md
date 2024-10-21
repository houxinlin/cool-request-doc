---
sidebar_position: 2
title: 已知bug
---

这里有一些已经发现的bug，以及解决方案，已知bug将在下个版本解决。
# \<=v2024.10.15

1. 使用自定义环境后，如果环境地址后面没有context-path，那么url文本框则只显示环境地址，不显示path部分。

    解决方案:
        
        1. 在自定义环境地址中，增加context-path部分，如`http://192.168.13.5:8080/context`，或者`http://192.168.13.5:8080/`，但不可以是`http://192.168.13.5:8080`

2. call this method在调用具有Class参数对象后，无法再次发起。原因是一些转移字符。

    解决方案:

        1. 进入C:\Users\{用户名}\.config\.cool-request\request\method-cache ，删除所有文件
