//Author: Amélie McCarthy
//Date: 30/9/24
//Purpose: Using functions to move left, right, up and down.

//global variables
var x = 300;
var y = 350;
var l = 200; //length
var w = 100; //width

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(139,172,189);
  
  //moving rectangle
  noStroke();
  fill(180,250,240);
  rect(x,y,l,w);
  
      
  //message on top of screen
  fill(41,77,95);
  textSize(24);
  textStyle(NORMAL);
  text('Use WASD to move the rectangle below!', 180,60);
  
  //move functions upon W,A,S,D pressed on canvas
  keyPressed();
}

//key press functions
function keyPressed() {
    if ((key === 'w') || (key === 'W') || (keyCode === UP_ARROW)) {
      moveUp();
    }
    if ((key === 'a') || (key === 'A') || (keyCode === LEFT_ARROW)) {
      moveLeft();
    }
    if ((key === 's') || (key === 'S') || (keyCode === DOWN_ARROW)) {
      moveDown();
    }
    if ((key === 'd') || (key === 'D') || (keyCode === RIGHT_ARROW)) {
      moveRight();
    }
  }

//directions
function moveRight() {
  x+=5; //increase x value
  
  //if x is beyond border, move back in
  if (x==width-l+5) {
    x=width-l;
  } //end if
}

function moveLeft() {
  x-=5; //decrease x value
  
  //if x is beyond border, move back to zero
  if (x==-5) {
    x=0;
  } //end if
}

function moveUp() {
  y-=5; //decrease y value, to be nearer to the top
  
  //if y is beyond border, move back to zero
  if (y==-5) {
    y=0;
  } //end if
}

function moveDown() {
  y+=5; //increase y value, to be nearer to the bottom
  
  //if y is beyond border, move back to zero
  if (y==height-w+5) {
    y=height-w;
  } //end if
}