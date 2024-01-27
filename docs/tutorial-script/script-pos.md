---
sidebar_position: 4
---

# 后置脚本


后置脚本用于在响应结束后执行用户代码，用户代码需要编写在`handlerResponse`函数下。
```java
 public void handlerResponse(ILog log, HTTPResponse response) {

 }
```

:::danger 警告
此脚本不能改变最终返回值，也不得修改方法名、返回值、参数列表和所在的类名、这会导致编译失败。
:::


### response.getHeader(String)

获取HTTP响应头，如果存在多个，则返回第一个。
```java title="示例"
String header =response.getHeader("content-type");
```

### response.getHeaders(String)

获取所有HTTP响应头所对应的值，返回`List<String>`。
```java title="示例"
List<String> header =response.getHeaders("content-type");
```

### response.getHeaderKeys()

获取所有响应头的key列表，返回`List<String>`。

```java title="示例"
List<String> keys =response.getHeaderKeys();
for (String headerKey : keys) {
    println(headerKey);            
}
```

### response.getResponseBody()

获取响应体。
```java title="示例"
byte[] body =response.getResponseBody();
```