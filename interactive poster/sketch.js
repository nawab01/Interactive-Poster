var letters = [
	 [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1],  //t
	[1,1,1,1,1,
	  0,0,1,0,0,
	  0,0,1,0,0,
	  0,0,1,0,0,
	  0,0,1,0,0],  //t
	  [0,1,1,1,0,
	 1,0,0,0,1,
	 1,1,1,1,1,
	 1,0,0,0,1,
	 1,0,0,0,1], //a
	 [1,0,0,0,1,
	  0,1,0,1,0,
	  0,0,1,0,0,
	  0,1,0,1,0,
	  1,0,0,0,1],  //x
	 [0,1,1,1,0,
	  0,0,1,0,0,
	  0,0,1,0,0,
	  0,0,1,0,0,
	  0,1,1,1,0],  //i
	  [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1],  //t
	  [1,1,1,1,0,
	   1,0,0,0,1,
	   1,0,0,0,1,
	   1,0,0,0,1,
	   1,1,1,1,0],  //d
	  [1,1,1,1,0,
	  1,0,0,0,1,
	  1,1,1,1,0,
	  1,0,0,1,0,
	  1,0,0,0,1],  //r
	 [0,1,1,1,0,
	  0,0,1,0,0,
	  0,0,1,0,0,
	  0,0,1,0,0,
	  0,1,1,1,0],  //i
	 [1,0,0,0,1,
	  1,0,0,0,1,
	  1,0,0,0,1,
	  0,1,0,1,0,
	  0,0,1,0,0],  //v
	 [1,1,1,1,1,
	  1,0,0,0,0,
	  1,1,1,1,1,
	  1,0,0,0,0,
	  1,1,1,1,1],  //e
	 [1,1,1,1,0,
	  1,0,0,0,1,
	  1,1,1,1,0,
	  1,0,0,1,0,
	  1,0,0,0,1],  //r
	 
]
var buildings = [
	 [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1],
	 [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1],
	 [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1],
	 [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1],
	 [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1],
	 [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1], 
	 [1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1,
	  1,1,1,1,1], 
	  ]
var blockSize=17;
var block = 25;
function setup(){
	createCanvas(1000,600);
	background(80);
	colorMode(HSB);
	push()
	translate(220, 160);
	for (var i =0; i <letters.length; i++) { //taxi driver
		var xPos = 0;
		var yPos = 0;
		if (i==6 && i!=0) {
			translate (-6*(blockSize*6),blockSize*6);
		}
		
		for (var j=0; j < letters[i].length; j++){
			if(letters[i][j] == 1 && i!=0 && i!=5){
				fill(random(100),random(100),100);
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
			}
			else if (letters[i][j] == 1 && i==0 ){
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
			}
			else if (letters[i][j] == 1 && i==5 ){
				fill(100);
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
			}
			xPos += blockSize;
			if (j%5 ==4) {
				print(j);
				xPos =0;
				yPos += blockSize;
			};
		}
		
		translate(blockSize*6, 0);
		
	};
	pop()
	push()
	translate(220,460);
	for (var i =0; i<buildings.length; i++) { //buildings bottom
		var xPos = 0;
		var yPos = 0;
		
		for (var j=0; j < buildings[i].length; j++){
			if(buildings[i][j] == 1 && i<=3){
				rect(xPos, yPos, random(block), random(block));
				rect(xPos, yPos, random(block), random(block));
				rect(xPos, yPos, random(block), random(block));
				rect(xPos, yPos, random(block), random(block));
				rect(xPos, yPos, random(block), random(block));
				rect(xPos, yPos, random(block), random(block));
			}
			xPos += block;
			if (j%7 ==2) {
				print(j);
				xPos =0;
				yPos += block;
			};
		}
		translate(block*6, 0);	
	};
	pop()
	push()
	translate(220,0);
		for (var i =0; i<buildings.length; i++) { //buildings top middle
		var xPos = 0;
		var yPos = 0;
		for (var j=0; j < buildings[i].length; j++){
			if(buildings[i][j] == 1){
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
			}
			xPos += blockSize;
			if (j%5 ==4) {
				print(j);
				xPos =0;
				yPos += blockSize;
			};
		}
		translate(blockSize*5, 0);	
	};
	pop()
	push()
	translate(0,0);
		for (var i =0; i<buildings.length; i++) { //left
		var xPos = 0;
		var yPos = 0;
		for (var j=0; j < buildings[i].length; j++){
			if(buildings[i][j] == 1 ){
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
			}
			xPos += blockSize;
			if (j%5 ==4) {
				print(j);
				xPos =0;
				yPos += blockSize;
			};
		}
		translate(0, blockSize*6);	
	};
	pop()
	push()
	translate(920,0);
		for (var i =0; i<buildings.length; i++) { //right
		var xPos = 0;
		var yPos = 0;
		for (var j=0; j < buildings[i].length; j++){
			if(buildings[i][j] == 1){
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
				rect(xPos, yPos, random(blockSize), random(blockSize));
			}
			xPos += blockSize;
			if (j%5 ==4) {
				print(j);
				xPos =0;
				yPos += blockSize;
			};
		}
		translate(0, blockSize*6);	
	};
	pop()
	
	push() //roads
		fill(70);
		noStroke();
		rect(0,100,1000,50);
		rect(0,380,1000,50);
		rect(150,0,60,800);
		rect(830,0,60,800);
	pop()
	push()
	translate(0,125);
	for ( var i=0; i<100; i++){
		if (i%2==0) {
			fill(100);
			noStroke();
			rect(0,0,20,3);
		};
		translate(block,0);
	}
	pop()
	push()
	translate(0,400);
	for ( var i=0; i<100; i++){
		if (i%2==0) {
			fill(100);
			noStroke();
			rect(0,0,20,3);
		};
		translate(block,0);
	}
	pop()
	push()
	translate(175,0);
	for ( var i=0; i<100; i++){
		if (i%2==0) {
			fill(100);
			noStroke();
			rect(0,0,3,20);
		};
		translate(0,block);
	}
	pop()
	push()
	translate(855,0);
	for ( var i=0; i<100; i++){
		if (i%2==0) {
			fill(100);
			noStroke();
			rect(0,0,3,20);
		};
		translate(0,block);
	}
	pop()
	push() //car
	translate(840,random(0,600));
	fill(48,100,90);
	rect(0,0,20,40,3);
	fill(0);
	rect(0,12,20,16);
	pop()
	push() //car
	translate(160,random(0,600));
	fill(48,100,90);
	rect(0,0,20,40,3);
	fill(0);
	rect(0,12,20,16);
	pop()
	push() //car
	translate(random(150,890),120);
	fill(0,85,70);
	rect(0,0,40,20,2);
	fill(0);
	rect(10,0,16,20);
	pop()
	push() //car
	translate(random(150,890),390);
	fill(115,100,50);
	rect(0,0,40,20,2);
	fill(0);
	rect(10,0,16,20);
	pop()
	
	push()
	translate(135,160);
	noStroke();
	fill(48,100,85,.6);
	ellipse(0,0,60,60);
	fill(0);
	ellipse(0,0,10,10);
	pop()
	push()
	translate(135,480);
	noStroke();
	fill(48,100,85,.6);
	ellipse(0,0,80,80);
	fill(0);
	ellipse(0,0,10,10);
	pop()
	push()
	translate(900,450);
	noStroke();
	fill(48,100,85,.6);
	ellipse(0,0,80,80);
	fill(0);
	ellipse(0,0,10,10);
	pop()
	//saveCanvas(h,'myCanvas','jpg');
}
