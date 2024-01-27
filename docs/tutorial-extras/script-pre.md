---
sidebar_position: 3
---

#  前置脚本

前置脚本用于在请求发起前执行用户代码，可对请求进行修改。

### request.setUrlParam(String,Object)

设置URL请求参数

```java title="示例"
request.setUrlParam("page",2);
```

### request.getUrlValues()

获取请求参数，返回一个value数组
```java title="示例"
String[] values =request.getUrlValues("name");
```

### request.getUrlParam(String)

获取一个请求参数
```java title="示例"
String value =request.getUrlParam("name");
```

### request.getUrlParamsMap()

获取请求参数Map
```java title="示例"
Map<String, String[]> values =request.getUrlParamsMap();
println(values.get("name"));
```


### request.getHeader(String)
获取请求头，返回一个`List<String>`

```java title="示例"
List<String> values =request.getHeader("key");
```

### request.addHeader(String,String)
添加一个请求头

```java title="示例"
request.addHeader("name","zhangsan");
```
### request.getUrl()

获取请求URL地址

```java title="示例"
String url =request.getUrl();
```
### request.setUrl(String)
设置新的url地址
```java title="示例"
request.setUrl("http://localhost:8080/name?age=1");
```

### request.getBody()

仅当非GET请求时有数据，获取请求体
```java title="示例"
String body =request.getBody();
```

### request.setBody(String | byte[])

设置请求体
```java title="示例"
request.setBody("name=zhangsan");
```