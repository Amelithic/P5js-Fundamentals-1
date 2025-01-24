//Author: Amelie McCarthy
//Date: 12-9-2024
//Purpose of program: Lab 1 Exercise 2

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(999);
  
  fill(color(0,255,0)); //change colour of rectangles to green
  noStroke(); //remove border
  
  //note: Size adjusted (x=300 --> x=380; x=425 --> x=305) as it did not center correctly in canvas
  rect(380,300,50,200); //vertical rectangle
  rect(305,375, 200,50); //horizontal rectangle, meeting at centerpoints
}