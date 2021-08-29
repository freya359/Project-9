var ball;

function setup() {
  createCanvas(400,400);

  ball=createSprite(200,200,30,30)
}

function draw() 
{
  background("blue");
  if (keyDown ("right")){
    ball.x=ball.x+5
  }

  if (keyDown ("left")){
    ball.x=ball.x-5
  }

  if (keyDown ("down")){
    ball.y=ball.y+5
  }

  if (keyDown ("up")){
    ball.y=ball.y-5
  }
drawSprites()
}




