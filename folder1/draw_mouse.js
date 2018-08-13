document.addEventListener("mousedown", pressMouse);
document.addEventListener("mouseup", releaseMouse);
document.addEventListener("mousemove", drawMouse);
document.getElementById("button_thin").addEventListener("click", changeThickness);
document.getElementById("button_medium").addEventListener("click", changeThickness);
document.getElementById("button_thick").addEventListener("click", changeThickness);
document.getElementById("button_black").addEventListener("click", changeColor);
document.getElementById("button_gray").addEventListener("click", changeColor);
document.getElementById("button_blue").addEventListener("click", changeColor);
document.getElementById("button_green").addEventListener("click", changeColor);
document.getElementById("button_cian").addEventListener("click", changeColor);
document.getElementById("button_red").addEventListener("click", changeColor);
document.getElementById("button_pink").addEventListener("click", changeColor);
document.getElementById("button_yellow").addEventListener("click", changeColor);
document.getElementById("button_random").addEventListener("click", changeColor);
document.getElementById("button_erase").addEventListener("click", changeColor);
document.getElementById("button_clear").addEventListener("click", changeColor);

var canvas1_object = document.getElementById("canvas1");
var canvas1 = canvas1_object.getContext("2d");
canvas1_object.width = 0.9*window.innerWidth;
canvas1_object.height = 0.6*canvas1_object.width;
canvas1.fillStyle = "#fff";
canvas1.fillRect(0,0,canvas1_object.width,canvas1_object.height);
var x = canvas1_object.width/2;
var y = canvas1_object.height/2;

var thickness = parseInt(document.getElementById("thickness_text").value);
var color = document.getElementById("color_text").value;

//(canvas1.canvas.width == canvas1_object.width)
//console.log(canvas1);


function drawLine(x0,y0,x,y){
	canvas1.beginPath();
	canvas1.lineWidth = thickness;
	canvas1.strokeStyle = color;
	canvas1.moveTo(x0,y0);
	canvas1.lineTo(x,y);
	canvas1.stroke();
	canvas1.closePath();
}

function changeColor(event){
	switch(event.srcElement.id){
		case "button_black":
			document.getElementById("color_text").value = "#000";
			document.getElementById("color_text").size = 1;
			break;
		case "button_gray":
			document.getElementById("color_text").value = "#777";
			document.getElementById("color_text").size = 1;
			break;
		case "button_blue":
			document.getElementById("color_text").value = "#00f";
			document.getElementById("color_text").size = 1;
			break;
		case "button_green":
			document.getElementById("color_text").value = "#0f0";
			document.getElementById("color_text").size = 1;
			break;
		case "button_cian":
			document.getElementById("color_text").value = "#0ff";
			document.getElementById("color_text").size = 1;
			break;
		case "button_red":
			document.getElementById("color_text").value = "#f00";
			document.getElementById("color_text").size = 1;
			break;
		case "button_pink":
			document.getElementById("color_text").value = "#f0f";
			document.getElementById("color_text").size = 1;
			break;
		case "button_yellow":
			document.getElementById("color_text").value = "#ff0";
			document.getElementById("color_text").size = 1;
			break;
		case "button_erase":
			document.getElementById("color_text").value = "#fff";
			document.getElementById("color_text").size = 1;
			document.getElementById("thickness_text").value = 50;
			break;
		case "button_clear":
			canvas1.fillStyle = "#fff";
			canvas1.fillRect(0,0,canvas1_object.width,canvas1_object.height);
			break;
		case "button_random":
			var r = parseInt(256*Math.random());
			var g = parseInt(256*Math.random());
			var b = parseInt(256*Math.random());
			document.getElementById("color_text").value = "rgb("+r+","+g+","+b+")";
			//The size of the box must be bigger
			document.getElementById("color_text").size = 11;
			break;
	}
}

function changeThickness(event){
	if(event.srcElement.id == "button_thin"){
		document.getElementById("thickness_text").value = 1;
	}
	else if(event.srcElement.id == "button_medium"){
		document.getElementById("thickness_text").value = 2;
	}
	else if(event.srcElement.id == "button_thick"){
		document.getElementById("thickness_text").value = 5;
	}
	
}

var pressed = false;
function pressMouse(event){
	//When the mouse is pushed we check the color, thickness, etc
	pressed = true;
	thickness = parseInt(document.getElementById("thickness_text").value);
	color = document.getElementById("color_text").value;
	x=event.layerX, y=event.layerY;
}
function releaseMouse(event){
	pressed = false;
	x=event.layerX, y=event.layerY;
}

function drawMouse(event){
	//console.log(event);
	if(pressed == true & event.layerY > 0){
		drawLine(x,y,event.layerX,event.layerY)
	}
	x=event.layerX, y=event.layerY;
}


/*color cambie con el tiempo, con
la rueda del raton y
con la posicion en la pantalla*/
