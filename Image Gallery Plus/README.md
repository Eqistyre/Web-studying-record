####<h2>关于DOM的一些经验
************
<h3>节点（node）</h3>
<h4><li>元素节点</h4></br>我们使用了`<p>` `<html>`这样的元素这些元素都是元素节点
<h4><li>文本节点 </h4></br>(`<p>` “Sakuraneko”)中的“Sakuraneko”就是一个文本节点
<h4><li>属性节点 </h4></br>(`<p>` title = "Sakuraneko") 中的title = "Sakuraneko"就是一个属性节点
</br>
</br>
<h3>获取元素的方法</h3>
<h4><li>getElementById:</h4></br>
获取元素通过Id 如（`<p id = purchases> `"这是个栗子")可以使用getElementById("purchases")获取这个元素,如果我们想获取里面的"这是个栗子"这一句话我们将使用另一种方法，我们将在接下来介绍。
<h4><li>getElemntsByTagName:</h4></br>
根据标签名获得元素，将获得很多，所以得到的是一个数组。
<h4><li>getElementsByClassName:</h4></br>
根据类名获得元素，同样所得为一个数组。
</br>
</br>
<h3>获取和设置属性</h3>
<h4><li>getAttribute:</h4></br>
object.getAttribute(attribute)
获取这个对象的属性。`<href> <title>`就是属性啦</br>
example: whichpic.getAttribute<"title">
<h4><li>setAttribute:</h4></br>
object.setAttribute<attribute,value>
</br>
</br>
<h3>childNodes属性</h3></br>
<h4>用来获取任何一个元素所有子元素，它是一个包含这个元素全部子元素的数组,它返回的节点并非只有元素节点一种</h4>
</br>
element.childNodes