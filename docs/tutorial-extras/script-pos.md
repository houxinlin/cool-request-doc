---
sidebar_position: 4
---

# 后置脚本

后置脚本用于在响应结束后执行用户代码，此脚本不能改变最终返回值。


### response.getHeader(String)

根据key名称获取请求头值
```java title="示例"
String header =response.getHeader("content-type");
```

### response.getHeaders(String)

根据key名称获取所有请求头值,返回`List<String>`
```java title="示例"
List<String> header =response.getHeaders("content-type");
```

### response.getHeaderKeys()

获取所有响应头的key列表，返回`Set<String>`

```java title="示例"
List<String> keys =response.getHeaderKeys();
for (String headerKey : getHeaderKeys()) {
    println(headerKey);            
}
```

### response.getBody()

获取响应体
```java title="示例"
byte[] body =response.getBody();
```

### response.saveResponseBody(String)

保存响应体中的数据
```java title="示例"
response.saveResponseBody("D:\\response.data");
```

### response.save(String)

保存响应体中的数据，此方法同时保存响应头和响应体
```java title="示例"
response.saveResponseBody("D:\\response.data");
```
