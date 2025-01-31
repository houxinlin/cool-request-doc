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

#### 问：安装插件后无法启动项目

```
Cool Request得一些高级功能需要依靠SpringBoot得自动配置，故而需要一个Starter。
如果出现无法启动得情况，可能是这个Starter与项目版本出现问题，
可在Cool Request设置中禁用高级特性，但如Call this method等功能会无法使用。
```


#### 问：插件卸载后如何删除所有缓存文件？

可删除 `/用户名/.config/.cool-request` 文件夹

