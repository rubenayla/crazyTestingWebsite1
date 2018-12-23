var BOX = 20; //20px of side
var GRIDX = Math.floor(0.9 * window.innerWidth/BOX);
var GRIDY = Math.floor(0.9 * window.innerHeight/BOX);
document.addEventListener("keydown", function(){
	//console.log(event.key);
	/*
		If we are going to put the movement s.keys[0], check that it's not in the same or opposite
		direction as the velocity of the snake.
		If we are adding several movements, then check that the last one is not in the same or
		opposite direction as the previous one.
		We save the different keys pressed in s.keys[] and every time we change direction
		we quit the first one and move the rest to i-1.
	*/
	if (s.keys.length == 0) {
		if ((opposite_v_key() != event.key) && (v_key() != event.key)) {
			s.keys[0] = event.key;
		}
	} else if ((event.key != s.keys[s.keys.length-1]) && (opposite_of(event.key) != s.keys[s.keys.length-1]) && (s.keys.length < 5)) {
		if (event.key == 'ArrowUp') {
			s.keys[s.keys.length] = event.key;
		} else if (event.key == 'ArrowDown') {
			s.keys[s.keys.length] = event.key;
		} else if (event.key == 'ArrowRight') {
			s.keys[s.keys.length] = event.key;
		} else if (event.key == 'ArrowLeft') {
			s.keys[s.keys.length] = event.key;
		}
	}
	//console.log(s.keys);
});

// Proccessing function to start
function setup() {
	createCanvas(BOX*GRIDX, BOX*GRIDY);
	frameRate(10);
	s = new Snake();
	f = new Food();
}

function draw() {
	background(51);

	// TURN. If we have to move, check
	var moved = false;
	
	if (s.keys[0] == 'ArrowUp') {
		s.vx = 0;
		s.vy = -1;
		moved = true;
	} else if (s.keys[0] == 'ArrowDown') {
		s.vx = 0;
		s.vy = 1;
		moved = true;
	} else if (s.keys[0] == 'ArrowRight') {
		s.vx = 1;
		s.vy = 0;
		moved = true;
	} else if (s.keys[0] == 'ArrowLeft') {
		s.vx = -1;
		s.vy = 0;
		moved = true;
	}
	if (moved) {
		//console.log(s.keys);
		for (var i = 0; i < (s.keys.length-1); i++) {
			s.keys[i] = s.keys[i+1];
		}
		s.keys.splice(s.keys.length-1); // Deletes last item
	}
	s.update();
	s.show();

	f.show();
}

function opposite_v_key(){
	if (s.vx == 1) {
		return 'ArrowLeft';
	} else if (s.vx == -1) {
		return 'ArrowRight';
	} else if (s.vy == 1) {
		return 'ArrowUp';
	} else if (s.vy == -1) {
		return 'ArrowDown';
	}
}

function v_key(){
	if (s.vx == 1) {
		return 'ArrowRight';
	} else if (s.vx == -1) {
		return 'ArrowLeft';
	} else if (s.vy == 1) {
		return 'ArrowDown';
	} else if (s.vy == -1) {
		return 'ArrowUp';
	}
}

function opposite_of(direction) {
	if (direction == 'ArrowUp') {
		return 'ArrowDown';
	} else if (direction == 'ArrowDown') {
		return 'ArrowUp';
	} else if (direction == 'ArrowLeft') {
		return 'ArrowRight';
	} else if (direction == 'ArrowRight') {
		return 'ArrowLeft';
	}
}

/* SNAKE OBJECT */
function Snake(){
	//grid position
	this.vx = 1;
	this.vy = 0;
	this.boxes = [ createVector(Math.floor(GRIDX/2), Math.floor(GRIDY/2)), createVector(Math.floor(GRIDX/2-1), Math.floor(GRIDY/2)), createVector(Math.floor(GRIDX/2-1), Math.floor(GRIDY/2)) ];
	this.keys = [];
	this.keys[-1] = null;
	this.update = function(){

		// COMER O MOVERSE
		// (this.boxes[0].x == f.x && this.boxes[0].y == f.y) || this.vx == 1 //FUNNY MODE
		if(this.boxes[0].x == f.x && this.boxes[0].y == f.y){
			// COMER. Nuevo vector al final del arreglo.
			this.boxes[this.boxes.length] = createVector(this.boxes[this.boxes.length-1].x, this.boxes[this.boxes.length-1].y);

			for (var i = this.boxes.length-2; i > 0; i--) {
				// No pasar por referencia. Copiar valores hacia el final.
				this.boxes[i].x = this.boxes[i-1].x;
				this.boxes[i].y = this.boxes[i-1].y;
			}
			// Actualizar la cabeza
			this.boxes[0].x += this.vx;
			this.boxes[0].y += this.vy;
			// ACTUALIZAR COMIDA
			f.x = floor(BOX*Math.random());
			f.y = floor(BOX*Math.random());

		} else {

			// MOVERSE
			for (var i = this.boxes.length - 1; i > 0; i--) {
				
				this.boxes[i].x = this.boxes[i - 1].x;
				this.boxes[i].y = this.boxes[i - 1].y;
			}
			this.boxes[0].x += this.vx;
			this.boxes[0].y += this.vy;
		}

		// MUERTE
		var die = false;
		if(this.boxes[0].x >= GRIDX){die = true;}
		if(this.boxes[0].x < 0){die = true;}
		if(this.boxes[0].y >= GRIDY){die = true;}
		if(this.boxes[0].y < 0){die = true;}
		if(this.boxes[0].y < 0){die = true;}
		for (var i = 1; i < this.boxes.length; i++) {
			if(this.boxes[i].x == this.boxes[0].x && this.boxes[i].y == this.boxes[0].y){die = true;}
		}

		if(die)	{
			alert("GAME OVER.\n" + this.boxes.length + " points");
			this.boxes = [ createVector(Math.floor(GRIDX/2), Math.floor(GRIDY/2)), createVector(Math.floor(GRIDX/2), Math.floor(GRIDY/2)), createVector(Math.floor(GRIDX/2), Math.floor(GRIDY/2)) ];
			this.keys = [];
			this.keys[-1] = null;
		}

	};

	this.show = function(){
		fill(255);
		for(var i = 0; i < this.boxes.length; i++){
			rect(BOX*this.boxes[i].x, BOX*this.boxes[i].y, BOX, BOX);
		}
	};
}

function Food(){
	//grid position
	this.x = floor(BOX*Math.random());
	this.y = floor(BOX*Math.random());
	/*
	this.vx = 0;
	this.vy = 0;
	this.update;
	*/
	this.show = function(){
		fill(255,0,200);
		rect(BOX*this.x, BOX*this.y, BOX, BOX);
	}
}
