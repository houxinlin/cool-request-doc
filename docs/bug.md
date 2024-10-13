---
sidebar_position: 2
title: 已知bug
---

这里有一些已经发现的bug，以及解决方案，已知bug将在下个版本解决。
# \<=v2024.10.15

1. 使用自定义环境后，如果环境地址后面没有context-path，那么url文本框则只显示环境地址，不显示path部分。

    解决方案:
        
        1. 在自定义环境地址中，增加context-path部分，如`http://192.168.13.5:8080/context`