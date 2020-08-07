function funcA(){
     //alert("funcA!");
    console.log("121funcA!");
}

function clickHandler(event) {
        console.log('事件属性', event)
    }


if(document.getElementById("ull")){

	document.getElementById("ull").addEventListener("click", 
		(ev)=>{
	　　　　var ev = ev || window.event;
	　　　　var target = ev.target || ev.srcElement;
			console.log("ev:",ev);

	　　　　if(target.className === 'btn1'){
	　 　　　　　　    //alert(123);
	　　　　　　　 // alert(target.innerHTML);
	 
				var url = 'http://localhost:5000/movie/delete/' + target.name;
				console.log("123funcA!");

				var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
				httpRequest.open('POST', url, true); //第二步：打开连接
				httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
				httpRequest.send();//发送请求 将情头体写在send中
				/**
				 * 获取数据后的处理程序
				 */
				httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
	    			if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
	        			var json = httpRequest.responseText;//获取到服务端返回的数据
	        			console.log(json);
	    		}
		};

	　}
	}, false)

}