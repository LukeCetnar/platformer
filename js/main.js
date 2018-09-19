//canvas context setup
var canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var ctx = canvas.getContext("2d");

//create game objects
var player = new Player();
var platform = new Platform(500, 500, 200, 20, "#00122");
var coinImage = new Image();
coinImage.src = "playerSprite.svg";


/*
  addEventListeners
*/
//window resize
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();

});

this.drawGround = function() {
  ctx.beginPath();
  ctx.rect(0, canvas.height - 20, canvas.width, canvas.height);
  ctx.fillStyle = "#0000000";
  ctx.fill();
  ctx.closePath();
}


//Random Color Generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//counter for game time dosent seem to work btw not sure why get NaN when I look for value
var gameTime = 0;
//For action and input
function update(dt) {
  gameTime += dt;
  player.update();

}
//for drawing
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height - 20);
  platform.draw();
  player.draw()
}
//functions that only need ran at start
function init() {
  ctx.font = '30px Arial';
  this.drawGround();

}

init();
//run game loop
//setInterval(animate, 10);
//a better game loop that also tracks game time
//dosent force speed
var lastTime;

function main() {
  var now = Date.now();
  var dt = (now - lastTime) / 1000.0;

  update(dt);
  render();

  lastTime = now;
  requestAnimationFrame(main);
};

main();