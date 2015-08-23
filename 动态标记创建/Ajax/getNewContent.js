function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET","example.txt",true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				var para = document.creatElement("p");
				var txt = document.creatTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	} else{
		alert('Sorry,your browser doesen\'t support XMLttpRequest');
	}
}
addLoadEvent(getNewContent);