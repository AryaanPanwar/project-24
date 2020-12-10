class Dustbin{

constructor(x,y,height,width,angle){

 var options={
 'restitution':2,
  'friction':1.2,
  'density':1.2,
 }   
 this.body=Bodies.rectangle(x,y,width,height,angle)
 this.weight=width;
 this.height=height; 
 Matter.Body.setAngle(thjis.body,angle);
World.add(world,this.body)


}
display(){
var pos=this.body.postion;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.weight,this.height);
pop();




}


}