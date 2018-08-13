document.addEventListener("mousedown", pressMouse);
document.addEventListener("mouseup", releaseMouse);
document.addEventListener("mousemove", drawIfPressed);
pressed = false;

var canvas1_object = document.getElementById("canvas1");
var canvas1 = canvas1_object.getContext("2d");
canvas1_object.width = window.innerWidth;
canvas1_object.height = 1*canvas1_object.width;

var color = "#000";

function drawLine(x0,y0,x,y){
	canvas1.beginPath();
	canvas1.lineWidth = 1;
	canvas1.strokeStyle = color;
	canvas1.moveTo(x0,y0);
	canvas1.lineTo(x,y);
	canvas1.stroke();
	canvas1.closePath();
}
function drawPattern(event){
	console.log(event);
	mouseX = event.layerX;
	mouseY = event.layerY;
	//We put the background so that the drawings don't overlap
	canvas1.fillStyle = "#e0e0e9";
	canvas1.fillRect(0,0,canvas1_object.width,canvas1_object.height);
	//First corner
	var x = 0;
	var y = 0;
	while(x <= mouseX){
		color = "rgb("+String(x*180/mouseX) +",0,0)";
		drawLine(0,y,x,mouseY);
		x += mouseX/parseInt(document.getElementById("lines_text").value-1);
		y += mouseY/parseInt(document.getElementById("lines_text").value-1);
	}
	//Second corner
	var x = mouseX;
	var y = 0;
	while(x >= 0){
		color = "rgb("+String(x*255/mouseX)+","+String(x*255/mouseX) +",0)";
		drawLine(x,0,0,y);
		x -= mouseX/parseInt(document.getElementById("lines_text").value-1);
		y += mouseY/parseInt(document.getElementById("lines_text").value-1);
	}
	//Third corner
	var x = mouseX;
	var y = mouseY;
	
	while(x >= 0){
		color = "rgb(0,"+String(x*255/mouseX) +",0)";
		drawLine(mouseX,y,x,0);
		x -= mouseX/parseInt(document.getElementById("lines_text").value-1);
		y -= mouseY/parseInt(document.getElementById("lines_text").value-1);
	}
	//Fourth corner
	var x = 0;
	var y = mouseY;
	while(x <= mouseX){
		color = "rgb(0,0," + String(x*180/mouseX) + ")";
		drawLine(x,mouseY,mouseX,y);
		x += mouseX/parseInt(document.getElementById("lines_text").value-1);
		y -= mouseY/parseInt(document.getElementById("lines_text").value-1);
	}
}
function drawIfPressed(event){
	if(pressed == true){
		drawPattern(event);
	}
}
function pressMouse(event){
	pressed = true;
	drawPattern(event);
}
function releaseMouse(event){
	pressed = false;
}
