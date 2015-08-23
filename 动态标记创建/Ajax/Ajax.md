##Ajax
******
###XMLHttpRequest
Ajax的核心是通过建立一个XMLHTttpRequest对象，这个对象充当着浏览器中的脚本（客户端）与服务器端中的中间人角色。</br>
通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。</br>

<img src = https://github.com/Eqistyre/Web-studying-record/blob/master/动态标记创建/Ajax/Ajax工作原图.png width = 500px>

如图所示我们可以看到用户在与浏览器的交互过程中，触发一个被 JavaScript 捕获到的事件，比如说表单中某个输入框的 onblur 事件，然后由 JavaScript 创建一个 XMLHttpRequest对象，并通过该对象异步地把请求发送到服务器端，这时，用户可以继续进行其它的操作，。服务器端在接到请求后，通过服务器端程序处理并把结果返回，返回的结果被 XMLHttpRequest 捕获到并返回给 JavaScript，再由 JavaScript 调用相应的 DOM 进行显示层的控制。 也就是说Ajax引擎充当了一个中间的角色。
其中我们也应该注意异步性，也就是当脚本发送了HttpRequest请求后，会就绪执行接下来的内容，而不会等待响应返回。
