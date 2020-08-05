function funcA(){
     alert("funcA!");
    console.log("funcA!");
}

function clickHandler(event) {
        console.log('事件属性', event)
    }
document.getElementById("ull").addEventListener("click", 
	(ev)=>{
　　　　var ev = ev || window.event;
　　　　var target = ev.target || ev.srcElement;
		console.log("ev:",ev);
　　　　if(target.nodeName.toLowerCase() == 'a'){
　 　　　　　　    alert(123);
　　　　　　　  alert(target.innerHTML);
　　　　}
　　}, false)