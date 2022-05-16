var garden;
var garden_image;

var bunny;
var bunny_image; 

var apple;
var apple_image;

var leaf;
var leaf1, leaf2, leaf3; 



function preload(){
//Storing the Garden Image
garden_image = loadImage("garden.png")

//Storing the Bunny Image
bunny_image = loadImage("rabbit.png"); 

//Storing the apple image
apple_image = loadImage("apple.png"); 

//Storing the leaf images
leaf1 = loadImage("leaf.png");

leaf2 = loadImage("redImage.png");

leaf3 = loadImage("orangeLeaf.png")
}



function setup(){
createCanvas(600, 600);

//Creating the Garden
garden = createSprite(300, 300, 600, 600);
garden.addImage("Background", garden_image); 
garden.scale = 1.37;


//Creating the Bunny
bunny = createSprite(300, 490, 40, 10); 
bunny.addImage("Rabbit", bunny_image); 
bunny.scale = 0.135;
}



function draw(){
  background("black"); 

  bunny.x = mouseX; 
  

  spawnApple(); 
  spawnLeafs(); 
  drawSprites();
}

function spawnApple(){
if(frameCount%50==0){
apple = createSprite(300, 50, 40, 10);
apple.addImage("apple", apple_image); 
apple.scale = 0.1;
apple.velocityY = +5; 

apple.x = Math.round(random(150, 500))
}
}


function spawnLeafs(){
if(frameCount%100==0){
  leaf = createSprite(300, 50, 40, 10);
 //leaf = Math.round(random(150, 550))
  leaf.velocityY = +10;

  var select_number = Math.round(random(1, 3))
  switch(select_number){
  
case 1: leaf.addImage("green leaf", leaf1);
leaf.scale = 0.1;

leaf.x = Math.round(random(150, 373))
break;

case 2: leaf.addImage("red leaf", leaf2);
leaf.scale = 0.1; 

case 3: leaf.addImage("orange leaf", leaf3);
leaf.scale = 0.15;

leaf.x = Math.round(random(300, 450))
break;

default:
  }
}
}