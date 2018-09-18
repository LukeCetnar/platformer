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
  this.img = document.getElementById("scream");

  this.jump = function(){
	  if(!this.hasJumped){
		  this.hasJumped = true;
  }
  }

  this.draw = function(){
    ctx.drawImage(this.img, this.x, this.y, 100, 100);
  }

  this.update = function(){

    //Going right
    if(this.rightPressed && this.x + this.width < canvas.width){
      this.x += this.dx;
    }
    //Going left
    if(this.leftPressed && this.x > 0){
      this.x -= this.dx;
    }
    // on ground
    //Jumping
    if(this.hasJumped){
    	this.y -= this.dy;
      this.dx = 3;
    	if(this.y <= this.height - 400||this.y <= 0){
    		this.dy = -6;
    	}
    	if(this.y >= canvas.height - this.height -20){
    		this.hasJumped = false;
    		this.dy = 4;
        this.dx = 7;
    	}

    }
    
    

    // window resizing

    // player y check
    if(!this.hasJumped){
      this.y = canvas.height - this.height-20;
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
