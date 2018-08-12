document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", dibujarMouse);

var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");
var x=200,y=200;

console.log(papel);
dibujarLinea("#000",0,0,0,papel.canvas.height,papel);
dibujarLinea("#000",0,papel.canvas.height,papel.canvas.width,papel.canvas.height,papel);
dibujarLinea("#000",papel.canvas.width,papel.canvas.height,papel.canvas.width,0,papel);
dibujarLinea("#000",0,0,papel.canvas.width,0,papel);

function dibujarLinea(color,xi,yi,x,y,lienzo){
	lienzo.beginPath();
	lienzo.lineWidth = 3;
	lienzo.strokeStyle = color;
	lienzo.moveTo(xi,yi);
	lienzo.lineTo(x,y);
	lienzo.stroke();
	lienzo.closePath();
}
var estado=0;
function presionarMouse(evento){
	estado=1;
	x=evento.layerX, y=evento.layerY;
}
function soltarMouse(evento){
	estado = 0;
	x=evento.layerX, y=evento.layerY;
}

function dibujarMouse(evento){
	console.log(evento);
	if(estado==1){
		dibujarLinea("#F00",x,y,evento.layerX,evento.layerY,papel)
	}
	x=evento.layerX, y=evento.layerY;
}
//color cambie con el tiempo