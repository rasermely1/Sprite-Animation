let roundGirl;
let lincoln;
let red;


function preload() {
  roundGirl = new Sprite(200, 200, 80, 80);
  lincoln = new Sprite(120, 200, 80, 80);
  red = new Sprite(280, 200, 80, 80);
  roundGirl.spriteSheet = 'assets/roundGirl.png';
  lincoln.spriteSheet =  'assets/lincoln.png';
  red.spriteSheet = 'assets/red.png';
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: { row: 0, col: 1, frames: 8},
    walkUp: { row: 5, frames: 6},
    walkDown: { row: 5, col: 6, frames: 6}
 };
  roundGirl.anis.frameDelay = 7;
  roundGirl.addAnis(animations);
  roundGirl.changeAni('walkRight'); 

  lincoln.anis.frameDelay = 7;
  lincoln.addAnis(animations);
  lincoln.changeAni('walkRight');

  red.anis.frameDelay = 7;
  red.addAnis(animations);
  red.changeAni('walkRight');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30);

  if(kb.pressing('d')){
    walkRight();
  } else
  if (kb.pressing('a')){
    walkLeft();
  } else
  if (kb.pressing('w')){
    walkUp();
  } else
  if(kb.pressing('s')){
    walkDown();
  } else {
    stop();
  }


  if(red.x + red.width/4 > width){
    walkLeft();
  } else
  if(lincoln.x - lincoln.width/4 < 0){
    walkRight();
  } else
  if(roundGirl.y + roundGirl.height/4 > height){
    walkUp();
  } else
  if(roundGirl.y - roundGirl.height/4 < 0){
    walkDown();
  }
}

function stop(){
  roundGirl.vel.x = 0;
  roundGirl.vel.y = 0;
  roundGirl.changeAni('stand');

  lincoln.vel.x = 0;
  lincoln.vel.y = 0;
  lincoln.changeAni('stand');

  red.vel.x = 0;
  red.vel.y = 0;
  red.changeAni('stand');
}

function walkRight() {
  roundGirl.changeAni('walkRight');
  roundGirl.vel.x = 1;
  roundGirl.vel.y = 0;
  roundGirl.scale.x = 1;

  lincoln.changeAni('walkRight');
  lincoln.vel.x = 1;
  lincoln.vel.y = 0;
  lincoln.scale.x = 1;

  red.changeAni('walkRight');
  red.vel.x = 1;
  red.vel.y = 0;
  red.scale.x = 1;
}



function walkLeft() {
  roundGirl.changeAni('walkRight');
  roundGirl.vel.x = -1;
  roundGirl.vel.y = 0;
  roundGirl.scale.x = -1;

  lincoln.changeAni('walkRight');
  lincoln.vel.x = -1;
  lincoln.vel.y = 0;
  lincoln.scale.x = -1;

  red.changeAni('walkRight');
  red.vel.x = -1;
  red.vel.y = 0;
  red.scale.x = -1;
}


function walkUp() {
  roundGirl.changeAni('walkUp');
  roundGirl.vel.y = -1;
  roundGirl.vel.x = 0;

  lincoln.changeAni('walkUp');
  lincoln.vel.y = -1;
  lincoln.vel.x = 0;

  red.changeAni('walkUp');
  red.vel.y = -1;
  red.vel.x = 0;
}


function walkDown(){
  roundGirl.changeAni('walkDown');
  roundGirl.vel.y = 1;
  roundGirl.vel.x = 0;

  lincoln.changeAni('walkDown');
  lincoln.vel.y = 1;
  lincoln.vel.x = 0;

  red.changeAni('walkDown');
  red.vel.y = 1;
  red.vel.x = 0;
}
