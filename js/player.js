//player controls
document.addEventListener("keydown", function(e){
  // right
  if(e.keyCode == 39){
    player.rightPressed = true;
  }
  // left
  else if(e.keyCode == 37){
    player.leftPressed = true;
  }// up
  else if(e.keyCode == 38){
    if(!player.hasJumped){
      player.jump();
    }
  }
});

document.addEventListener("keyup", function(e){
  if(e.keyCode == 39) {
    player.rightPressed = false;
  }
  else if(e.keyCode == 37) {
    player.leftPressed = false;

  }
});

//Player Object
function Player(){
  this.width = 100;
  this.height = 100;
  this.x = (canvas.width - this.width)/2;
  this.y = canvas.height - this.height -20;
  this.dx = 7;
  this.dy = 4;
  this.leftPressed = false;
  this.rightPressed = false;
  this.hasJumped = false;
  this.gravity = 0.15;

  this.draw = function(){
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#0CB200";
    ctx.fill();
    ctx.closePath();
  }

  this.jump = function(){
    this.dy = -7.8;
    this.hasJumped = true;
  }

  this.update = function(){
    //add gravity
    this.dy += this.gravity;
    this.y += this.dy;// this will also add jump when jumping

    //Going right
    if(this.rightPressed && this.x + this.width + this.dx < canvas.width){
      this.x += this.dx;
    }
    //Going left
    if(this.leftPressed && this.x - this.dx > 0){
      this.x -= this.dx;
    }

    //on ground
    if(this.y >= canvas.height - this.height - 20){
      this.hasJumped = false;
      this.y = canvas.height - this.height - 20;
    }

    // player x check
    if(this.x + this.width > canvas.width){
      this.x = canvas.width - this.width;
    }    

    ctx.fillText("X Position: " + Math.round(this.x*10)/10,100,50);
    ctx.fillText("Y Position: " + Math.round(this.y*10)/10,100,100);
    ctx.fillText("hasjumped?: " + this.hasJumped,100,150);
    this.draw();
  }
}
