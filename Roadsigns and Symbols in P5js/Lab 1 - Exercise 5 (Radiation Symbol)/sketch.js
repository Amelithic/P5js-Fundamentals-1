//Author: Amelie McCarthy
//Date: 12-9-2024
//Purpose of program: Lab 1 Exercise 5

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(150); // set bg to grey
  angleMode(DEGREES); //specifying angle mode
  
  // yellow circle with black outline
  fill(color(255,255,0)); // change colour to yellow
  stroke('black'); //set border colour to black
  strokeWeight(15); //border size
  circle(400,400,400);
  
  // 3 black triangles inside circle
  // use of arc to get curved edge of triangular slice
  // note: order of start/end degree inverts which segment gets filled - outer/inner
  fill(color('black')); // change colour to black
  noStroke(); // remove border
  arc(400, 400, 400, 400, 180, 240); //triangle 1 - center x,y, width, height, start point of arc in degrees, end in degrees)
  arc(400, 400, 400, 400, 300, 360); //triangle 2
  arc(400, 400, 400, 400, 60, 120); //triangle 3




  
  //inner point
  fill(color('black')); // change colour to black
  stroke(color(255,255,0)); //set border colour to yellow
  strokeWeight(30); //border size
  circle(400,400,110);
}