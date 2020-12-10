
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var bin1,bin2,bin3;
var paper;


function preload()
{
	
	
}

function setup() {
	createCanvas(1600, 500);

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=("yellow");
	 
	bin1=createSprite(1000,400,20,90,PI/2);
	bin1.scale=1;
	bin1.shapeColor=("white");

	bin2=createSprite(1200,400,20,90,PI/2);
	bin2.scale=1;
	bin2.shapeColor=("white");

	bin3=createSprite(1100,450,200,20,PI/2);
	bin3.scale=1;
	bin3.shapeColor=("white"); 

	paper=createSprite(200,450,20,20,PI/2);
	paper.scale=1;
	paper.shapeColor=("pink");

	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  
  drawSprites();
  
 
}
function keyPressed(){
if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.position.x,paper.position.y,{x:85,y:-85});


}



}









