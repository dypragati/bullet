var bullet, wall;
var thickness, weight, thickness, damage;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 50);
  wall = createSprite(1600, 160, 60, 1600);
  weight = random(30, 52);
  bullet.velocityX = random(223, 321);
  weight = random(400, 1500);
  wall.shapeColor = "black";
  thickness = random(22,83);
  damage = 0;

  
bullet.velocityY = 0;
}

function draw() {
  background(255,255,255);  
  
  bullet.collide(wall);
  if(bullet.x-wall.x < wall.width/2+bullet.width/2&&
    wall.x-bullet.x < bullet.width/2+wall.width/2&&
    bullet.x-wall.x < wall.height/2+bullet.height/2&&
    wall.x-car.x < bullet.height/2+bullet.height/2
    ){
    damage = 0.5*bulletWeight*bullet.velocityX*bullet.velocityY/thickness*thickness*thickness;
  }
  if(damage =>10 ){
    bullet.shapeColor = "green";
  }
  
  if(damage <=10 ){
    bullet.shapeColor = "red";
  }
  drawSprites();



}