var ball ;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
if(keyDown("right")){
  ball.x = ball.x + 3;
}
if(keyDown("left")){
  ball.x = ball.x - 3;
}
if(keyDown("up")){
  ball.y = ball.y - 3;
}
if(keyDown("down")){
  ball.y = ball.y + 3;
}
drawSprites();
}




