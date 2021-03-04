//modules
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,height,400,20)//create the ground 
    box1 = new Box(300,100,30,30);//create an object
    box2 = new Box(290,150,30,100);//passing argument
   


    console.log(ground);
}

function draw(){
    background(0);

    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();

   

}