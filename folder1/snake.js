var BOX = 20; //20px of side
var GRIDX = Math.floor(0.9*window.innerWidth/BOX);
var GRIDY = Math.floor(0.9*window.innerHeight/BOX);

function setup() {
	createCanvas(BOX*GRIDX, BOX*GRIDY);
	frameRate(10);
	s = new Snake();
	f = new Food();
}

function draw() {
	background(51);

	// TURN
	/*
		It only turns once per frame so if you are
		going to the RIGHT and you type fast 
		UP and LEFT before it moves, you won't die,
		since you haven't had time to turn.
		You won't die if you press LEFT going RIGHT
		for example
	*/
	if (keyIsDown(UP_ARROW) && s.vy < 1) {
		s.vx = 0;
		s.vy = -1;
	} else if (keyIsDown(DOWN_ARROW) && s.vy > -1) {
		s.vx = 0;
		s.vy = 1;
	} else if (keyIsDown(RIGHT_ARROW) && s.vx > -1) {
		s.vx = 1;
		s.vy = 0;
	} else if (keyIsDown(LEFT_ARROW) && s.vx < 1) {
		s.vx = -1;
		s.vy = 0;
	}

	s.update();
	s.show();

	f.show();
}

/* SNAKE OBJECT */
function Snake(){
	//grid position
	this.vx = 1;
	this.vy = 0;
	this.boxes = [ createVector( Math.floor(GRIDX/2), Math.floor(GRIDY/2)), createVector( Math.floor(GRIDX/2-1), Math.floor(GRIDY/2)), createVector( Math.floor(GRIDX/2-1), Math.floor(GRIDY/2)) ];
	this.update = function(){

		// COMER O MOVERSE
		/* (this.boxes[0].x == f.x && this.boxes[0].y == f.y) || this.vx == 1 //FUNNY MODE*/
		if( this.boxes[0].x == f.x && this.boxes[0].y == f.y ){
			// COMER
			len = this.boxes.length;

			this.boxes[len] = createVector(this.boxes[len-1].x, this.boxes[len-1].y);

			for (var i = len-1; i > 0; i--) {
				this.boxes[i].x = this.boxes[i-1].x;
				this.boxes[i].y = this.boxes[i-1].y;
			}

			this.boxes[0].x += this.vx;
			this.boxes[0].y += this.vy;
			// ACTUALIZAR COMIDA
			f.x = floor( BOX*Math.random() );
			f.y = floor( BOX*Math.random() );

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
			this.boxes = [ createVector( Math.floor(GRIDX/2), Math.floor(GRIDY/2)), createVector( Math.floor(GRIDX/2), Math.floor(GRIDY/2)), createVector( Math.floor(GRIDX/2), Math.floor(GRIDY/2)) ];
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
	this.x = floor( BOX*Math.random() );
	this.y = floor( BOX*Math.random() );
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
