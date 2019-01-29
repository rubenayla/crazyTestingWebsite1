var BOX = 20; //20px of side
var GRIDX = Math.floor(0.9 * window.innerWidth/BOX);
var GRIDY = Math.floor(0.5 * window.innerHeight/BOX);
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
	// console.log(event.key);
	if(event.key == 'w' || event.key == 'a' || event.key == 's' || event.key == 'd'){
		if (s.keys.length == 0) {
			if ((event.key != opposite_v_key()) && (event.key != v_key())) {
				s.keys[0] = event.key;
			}
		} else if ((event.key != s.keys[s.keys.length-1]) && (opposite_of(event.key) != s.keys[s.keys.length-1]) && (s.keys.length < 5)) {
			if (event.key == 'w') {
				s.keys[s.keys.length] = event.key;
			} else if (event.key == 's') {
				s.keys[s.keys.length] = event.key;
			} else if (event.key == 'd') {
				s.keys[s.keys.length] = event.key;
			} else if (event.key == 'a') {
				s.keys[s.keys.length] = event.key;
			}
		}
	}
	// console.log(s.keys);
});

// Proccessing function to start
function setup() {
	createCanvas(BOX*GRIDX, BOX*GRIDY);
	frameRate(50);
	s = new Snake();
	f = new Food();
}

function draw() {
	background(51);

	// TURN. If we have to move, check
	var moved = false;
	
	if (s.keys[0] == 'w') {
		s.vx = 0;
		s.vy = -1;
		moved = true;
	} else if (s.keys[0] == 's') {
		s.vx = 0;
		s.vy = 1;
		moved = true;
	} else if (s.keys[0] == 'd') {
		s.vx = 1;
		s.vy = 0;
		moved = true;
	} else if (s.keys[0] == 'a') {
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
		return 'a';
	} else if (s.vx == -1) {
		return 'd';
	} else if (s.vy == 1) {
		return 'w';
	} else if (s.vy == -1) {
		return 's';
	}
}

function v_key(){
	if (s.vx == 1) {
		return 'd';
	} else if (s.vx == -1) {
		return 'a';
	} else if (s.vy == 1) {
		return 's';
	} else if (s.vy == -1) {
		return 'w';
	}
}

function opposite_of(direction) {
	if (direction == 'w') {
		return 's';
	} else if (direction == 's') {
		return 'w';
	} else if (direction == 'a') {
		return 'd';
	} else if (direction == 'd') {
		return 'a';
	}
}

/* SNAKE OBJECT */
function Snake(){
	//grid position
	this.vx = 1;
	this.vy = 0;
	this.boxes = [createVector(Math.floor(GRIDX/2), Math.floor(GRIDY/2)), createVector(Math.floor(GRIDX/2-1), Math.floor(GRIDY/2)), createVector(Math.floor(GRIDX/2-1), Math.floor(GRIDY/2))];
	this.keys = [];
	this.update = function(){

		// COMER O MOVERSE
		// (this.boxes[0].x == f.x && this.boxes[0].y == f.y) || this.vx == 1 //FUNNY MODE
		if(this.boxes[0].x == f.x && this.boxes[0].y == f.y || this.vx == 1){
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
			f.x = floor(GRIDX*Math.random());
			f.y = floor(GRIDY*Math.random());

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
	this.x = floor(GRIDX*Math.random());
	this.y = floor(GRIDY*Math.random());
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
