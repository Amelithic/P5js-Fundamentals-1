//Author: Amelie McCarthy
//Date: 12-9-2024
//Purpose of program: Lab 1 Exercise 4

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('grey'); //grey background
  
  //red outer circle, outlined
  stroke(000); //change stroke to black (will be visible)
  strokeWeight(2); //width of line
  fill(color(255,0,0)); //change colour to red
  circle(400,400,400); //radius = 200, meaning diameter = 400px
  
  //blue inner circle
  fill(color(0,0,255)); //change colour to blue
  circle(400,400,300); //radius = 150, meaning diameter = 300px
  
  //horizontal + vertical lines
  fill(color(000)); //change colour to black (won't be visible)
  stroke(000); //change stroke to black (will be visible)
  line(400,250,400,550); //two point of line in format: x1,y1,x2,y2
  line(250,400,550,400); //two point of line in format: x1,y1,x2,y2
}