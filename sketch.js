const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
ground1= new Ground (600,800,1200,30)
box1 = new Box(800,200,70,70);
box2 = new Box(800,200,70,70);
box3 = new Box(800,200,70,70);
box4 = new Box(800,200,70,70);
box5 = new Box(800,200,70,70);
box6 = new Box(800,200,70,70);
box7 = new Box(800,200,70,70);
box8 = new Box(800,200,70,70);

ball1 = new Ball(600,400,50)
chain1= new Chain(ball1.body,{x:600,y:200})
}

function draw(){
    background(0,255,255);
    Engine.update(engine);
    
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
ball1.display();
chain1.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition (ball1.body,{x:mouseX,y:mouseY})
}