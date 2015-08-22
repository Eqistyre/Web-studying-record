##动态方法实现动态标记
***********
####<li>creatElement方法
####document.creatElement(nodeName)
creatElement的意思是创建一个元素节点,如document.creatElement("p")会创建一个p元素。
但是他是没有用的，因为它没有与任何元素关联。我们使用Var para ＝ document.creatElement("p")将这歌元素储存到para。
####<li>appendChild方法
####parent.appendChild(child)

    var testdiv = document.getElementById("testdiv");
    var para = document.creatElement("p");
    testdiv.appendChild(para);
appendChild()向节点添加最后一个子节点。
####<li>creatTextNode方法
####document.creatElement(text)
    
    var txt = document.creatElement("Helloworld");
    para.appendChild("txt");
通过这种方法我们可以创建一个文本节点。
####<li>insertBefore方法
####paraentElement.insertBefore(newElement,targetElement)
关于这个元素的paraent元素我们可以使用吊取targetElement的paraentnode方法获取。因为在DOM中元素的父元素必是一个元素节点，毕竟属性节点与元素节点是不存在子元素节点的。
####<li>在现有元素后面插入一个新元素。
nodeObject.nextSibing</br>
我们还得知道nextSibing属性可返回某个元素后面紧跟着的元素（处于同一树层级中）
#####targetElement在事前通过getElementById准备好。
    function insertAfter(newElement,targetElement) {
    	var parent = targetElement.parentNode;
    	if (parent.lastChild == targetment) {
    		parent.appendChild(newElement);
    	} else {
    		parent.insertBefore(newElement,targetElement.nextSibing);
    	}
    }
 这段代码我们可以分块进行理解。</br>
 <li>第一种情况targetElement的父元素有一个子元素或者targetElement是最后一个子元素，这是我们可以通过向其父元素插入子元素的方法（appendChild这种方法插入的元素会直接成为最后一个子元素）。
 <li>第二种情况targetElement的父元素有很多个子元素且这个子元素放在一群元素中间，这时候我们就可以使用nextSibing的方法获取他的下一个兄弟元素，然后再通过insertBefore方法将新元素放在目标元素的下一个兄弟元素之前。
 
######完整代码
    var testdiv = document.getElementById("testdiv");
    var para = document.creatElement("p");
    testdiv.appendChild(para);
    var txt = creatTextNode("Hello world");
    para.appendChild(txt)
