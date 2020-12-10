class Paper{

constructor(x,y)
{
   var options={
    isStatic:true,
   'restitution':0.3,
    'friction':0.5,
     'density':1.2

   }
   this.body=Bodies.circle(this.x,this.y,20,options)
    this.x=x;
    this.y=y;
    this.r=20;
    
   
    World.add(world,this.body);
}
display(){
 
 var pos = this.body.position;
 var angle=this.body.angle;

 push();
 translate(paperpos.x,paperpos.y);
 rectMode(CENTER);
 strokeWeight(3);
 fill(255,0,255);
 ellipse(0,0,this.r,this.r)
 pop();
}


}