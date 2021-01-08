var k = 0;
var h = 0;
function switchlight(){
	if (k === 0){
		k = 1;
		var lit = document.getElementById("light");
		lit.style.opacity = 0.5;
		lit.style.borderBottomColor = "yellow";
		lit.style.zIndex = 65;
	}
	else if (k === 1){
		var lit = document.getElementById("light");
		k = 0;
		lit.style.opacity = 1;
		lit.style.borderBottomColor = "black";
		lit.style.zIndex = 40;		
	}
}
document.addEventListener("DOMContentLoaded", () => curtain());
function curtain(){
	var t = 0;
	document.getElementById("curt").style.width=screen.width + 'px';
	b=screen.height-130;
	document.getElementById("curt").style.height=b + 'px';
	document.getElementById("curt").onclick = function(){
		t = 1;
		this.style.transitionDuration = 1 + 's';
		this.style.bottom = 100 + '%';
	}
	document.getElementById("curt").onmouseover = function(){
		if (t!=1){
		this.style.transitionDuration = 0.2 + 's';
		this.style.bottom = 5 + '%';
	}
	}
	document.getElementById("curt").onmouseout = function(){
		if (t!=1) {
		this.style.transitionDuration = 0.2 + 's';
		this.style.bottom = 0 + '%';
	}
	}
	document.querySelector("#lampobj").onmousedown = function(){
		document.getElementById("switch").style.top = 45 + 'px';
	}
	document.querySelector("#lampobj").onmouseup = function(){
		document.getElementById("switch").style.top = 25 + 'px';
	}
}
function getsmth(){
	if (h === 0){
		h = 1;
		var rabbit = document.getElementById("rabbit");
		var pigeon = document.getElementById("pigeon");		
		rabbit.style.top = 50 + "px";
		setTimeout ('pigeon.style.top = -90+ "px"',500);	
		
	}
	else if (h === 1){
		h = 0;
		var rabbit = document.getElementById("rabbit");
		var pigeon = document.getElementById("pigeon");
		pigeon.style.top = 50 + "px";
		setTimeout ('rabbit.style.top = -90+ "px"',500);	
	}	
}