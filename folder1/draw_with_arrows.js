//Canvas things
var canvas1_object = document.getElementById("canvas1");
var canvas1 = canvas1_object.getContext("2d");
canvas1_object.width = 0.8*window.innerWidth;
canvas1_object.height = canvas1_object.width/2;
canvas1.fillStyle = "#fff";
canvas1.fillRect(0,0,canvas1_object.width,canvas1_object.height);



//You begin writing at the center of the canvas.
var x=canvas1_object.width/2;
var y=canvas1_object.height/2;
document.addEventListener("keydown", drawWithKeyboard);
var arrows = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	W: 87,
	A: 65,
	S: 83,
	D: 68
};

function drawWithKeyboard(event){
	//console.log("drawRectangle");
	//document.write("drawRectangle");
	//console.log(event);
	//console.log(event.keyCode);
	//drawLine(canvas1,"#000",0,0,500,500);
	var step = parseInt(document.getElementById("step_text").value);
	var color = document.getElementById("color_text").value;

	if(event.keyCode == arrows.LEFT | event.keyCode == arrows.A){
		drawLine(canvas1,color,x,y,x-step,y);
		x -= step;
	}
	else if(event.keyCode == arrows.UP | event.keyCode == arrows.W){
		drawLine(canvas1,color,x,y,x,y-step);
		y -= step;
	}
	else if(event.keyCode == arrows.RIGHT | event.keyCode == arrows.D){
		drawLine(canvas1,color,x,y,x+step,y);
		x += step;
	}
	else if(event.keyCode == arrows.DOWN | event.keyCode == arrows.S){
		drawLine(canvas1,color,x,y,x,y+step);
		y += step;
	}
	
}

function drawLine(canvas_context2d=canvas1,color="#000",x0=0,y0=0,x,y){

	/*canvas1.fillStyle = "#fff";
	canvas1.fillRect(0,0,canvas1_object.width,canvas1_object.height);*/
	canvas_context2d.beginPath();
	canvas_context2d.strokeStyle = color;
	canvas_context2d.lineWidth = parseInt(document.getElementById("line_width_text").value);
	canvas_context2d.moveTo(x0,y0);
	canvas_context2d.lineTo(x,y);
	canvas_context2d.stroke();
	canvas_context2d.closePath();
}




//editado
//varias cajitas con botones para cambiar ancho y largo de la linea
