---
sidebar_position: 10
title: 常见问题
---

#### 问:  请求脚本中无法设置HTTP Origin等头

```
如果使用hutool等工具发现在请求其他接口时候无法设置Origin等请求头，
这是因为HttpURLConnection的限制问题，底层使用jdk的HttpURLConnection都会有此类问题。

解决方案，点击Help——>Edit Custom VM Option
在底部增加一条-Dsun.net.http.allowRestrictedHeaders=true

然后重启idea。
```