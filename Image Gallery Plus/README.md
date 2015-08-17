###<h2>关于DOM的一些经验
************
<h3>节点（node）</h3>
######元素节点

我们使用了`<p> <html>`这样的元素这些元素都是元素节点

######文本节点
(`<p> “Sakuraneko”`)中的“Sakuraneko”就是一个文本节点
######属性节点
(`<p> title = "Sakuraneko"`) 中的title = "Sakuraneko"就是一个属性节点
</br>
</br>
<h3>获取元素的方法</h3>
######getElementById:
获取元素通过Id 如（`<p id = pucrhases> "这是个栗子"`)可以使用getElementById("purchases")获取这个元素,如果我们想获取里面的"这是个栗子"这一句话我们将使用另一种方法，我们将在接下来介绍

######getElemntsByTagName:
根据标签名获得元素，将获得很多，所以得到的是一个数组
######getElementsByClassName:
根据类名获得元素，同样所得为一个数组。
</br>
</br>
<h3>获取和设置属性</h3>
######getAttribute:
object.getAttribute(attribute)
获取这个对象的属性；`<href> <title>`就是属性啦</br>
example: whichpic.getAttribute("title")
######setAttribute:
object.setAttribute<attribute,value>
</br>
</br>
<h3>childNodes属性</h3>
######用来获取任何一个元素所有子元素，它是一个包含这个元素全部子元素的数组,它返回的节点并非只有元素节点一种
element.childNodes
</br>
</br>
<h3>nodeType属性
######每一个节点都有nodeType属性，他们的值有着特殊的意义
<li>元素节点的nodeType值是1
<li>属性节点的nodeType值是2
<li>文本节点的nodeType值是3

可以通过不同的nodeType值来设计出只针对一种元素节点的函数
</br>
</br>
######nodeValue
node.nodeValue可用来获取节点的值（注意不是上面nodeType所获得的属性值，属性值只是告诉你它的类别，举个栗子如下</br>
`<node value="值">包含的文本值</node>`</br>
如果我们想要获得它的文本值，我们得知道node.value获得的知识它的value值，他的文本值是他的第一个子节点，所以我们若是想获得它真正的文本值得这样做</br>
node.childNodes[0].nodeValue
这样我们就可以获得它的文本值了
</br>
</br>
######firstChild和lastChild属性
看名字就知道了 firstChild是它的第一个子节点，lastChild是它最后的一个子节点
</br>
</br>
