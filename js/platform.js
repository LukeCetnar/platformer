function Platform(x, y, width, height, FillIn) {
  this.x = x;
  this.y = y;
  this.dx = 5
  this.width = width;
  this.height = height;

  this.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = FillIn;
    ctx.fill();
    ctx.closePath();
    //creates moving platform
    // this.x+=this.dx
    // if(this.x >= canvas.width || this.x <=0){
    // 	this.dx*=-1
    // }
  }
}