
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var box,ball
function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var option={
  isStatic:true
}
box=Bodies.rectangle(200,370,400,10,option)
World.add(world,box);
var balloption={
  restitution:1.0
}
ball=Bodies.circle(200,10,30,balloption)
World.add(world,ball)
}

function draw() 
{
  background(51);
Engine.update(engine);
rectMode(CENTER)
rect(box.position.x,box.position.y,400,10)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30) 
}

