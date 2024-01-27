---
sidebar_position: 2
---

#  通用函数

通用函数为内置的Java函数，可在请求、响应脚本中调用。


### readFileAsString(String)

读取文件内容到String

:::tip

此处所有路径分割符同Java一样，需要使用`\\`

:::


```java title="示例"
String json =readFileAsString("D:\\text\\1.json");
```

### readFileAsByte(String)

读取文件内容到byte[]
```java title="示例"
byte[] content=readFileAsByte("D:\\text\\1.json");
```

### writeFile(String , String | byte[])

将String或者byte[]内容写入到文件
```java title="示例"
writeFile("D:\\text\\1.txt","text");

writeFile("D:\\text\\1.txt","text".getBytes());
```

### createDirs(String)

创建多级目录

```java title="示例"
createDirs("D:\\text1\\text2");
```


### createFile(String)

创建文件，当父级目录不存在时，会自动创建父级目录

```java title="示例"
createFile("D:\\1.txt");
```

### println(Object) | print(Object)

日志输出函数，当使用System.out.println()时，无法看到输出，必须使用此函数

```java title="示例"
print("log")    //无换行
println("log")  //换行
```