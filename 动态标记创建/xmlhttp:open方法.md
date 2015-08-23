##xmlhttp:open方法
******
###open
创建一个新的http请求，并指定此请求的方法，url以及验证信息</br>

<li>语法

oXMLHttpRequest.open(bstrMethod,bstrUrl,varAsync,bstrUser,bstrPassword)

<li>参数

bstrMethod
http方法，例如：POST、GET、PUT及PROPFIND。大小写不敏感。

bstrUrl
请求的URL地址，可以为绝对地址也可以为相对地址。

varAsync[可选]
布尔型，指定此请求是否为异步方式，默认为true。如果为真，当状态改变时会调用onreadystatechange属性指定的回调函数。

bstrUser[可选]
如果服务器需要验证，此处指定用户名，如果未指定，当服务器需要验证时，会弹出验证窗口。

bstrPassword[可选]
验证信息中的密码部分，如果用户名为空，则此值将被忽略。
Example
下面的例子演示从服务器请求book.xml,并显示其中的book字段。

