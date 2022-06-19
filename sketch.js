const Engine =Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
 var engine,world;
 var Ground;
 var score=0;
var particles;
var count=0;
this.plinkos=[];
this.division=[];
var gamestate;
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Ground = new ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    Engine.run(engine);
    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(25); fill ( "white");
 text("500",20, height-divisionHeight/2);
 text("500",100, height-divisionHeight/2);
 text("500",180, height-divisionHeight/2);
 text("500",260, height-divisionHeight/2);
 text("100",340, height-divisionHeight/2);
 text("100",420, height-divisionHeight/2);
 text("100",500, height-divisionHeight/2);
 text("200",580, height-divisionHeight/2);
 text("200",660, height-divisionHeight/2);
 text("200",740, height-divisionHeight/2);
 for (var i = 0; i < plinkos.length; i++) {
   plinkos[i].display();
  }
 
 
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
   if ( particles!=null){
     particles.display();
     if ( particles.body.position.y>760){
if( particles.body.position.x<300){
  score=score+500;
  particles=null;
}
if( particles.body.position.x>301 && particles.body.position.x<600){
  score=score+100;
  particles=null;
}
if( particles.body.position.x>601 && particles.body.position.x<900){
  score=score+200;
  particles=null;
}
     }
   }
   if ( count>=5){
     gamestate===END ;
     textSize( 50);
     fill( "white");
     text( "GameOver",width/2,height/2);
   }
   Engine.update(engine);
   Ground.display();
   drawSprites(); mousePressed();
}
function mousePressed(){
  if ( gamestate!=="end"){
 particles = new Particle( mouseX,10,10,5);
 
  }
}