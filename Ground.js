class Ground{

constructor(x,y,height,width,angle)
{

var options={
isStatic:true,  
'restitution':1,


}

this.width=width;
this.height=height;
this.angle=angle;
this.body=Bodies.rectangle(x,y,width,height,angle)

World.add(world,this.body);

}
display(){
var pos=this.body.position;
var angle=this.body.angle;

push();
rectMode(CENTER);
translate(groundpos.x,groundpos.y)
rect(0,0,this.width,this.height)
pop();


}


}