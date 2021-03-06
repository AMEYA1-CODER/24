
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render
var dustbinObj,paperObj,groundObj;
var world


function setup() {
	createCanvas(800, 700);
  engine=Engine.create();
  world=engine.world;

	paperObj=new Paper(200,450,50);
  dustbinObj=new Dustbin(1200,650);
   groundObj=new Ground(width/2,670,width,20);
   var render=Render.create({
element:document.body,
engine:engine,
options:{
    width:1200,
height:700,
wireFrames:false
}

   }
   )
   Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObj.display();
  groundObj.display();
 dustbinObj.display();
  drawSprites();
 
}
function keyPressed() 
{ 
    if (keyCode === UP_ARROW) 
    { 
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); }

    }
