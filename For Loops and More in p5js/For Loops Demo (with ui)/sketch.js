//Author: Amélie McCarthy
//Date: 2-10-24
//Purpose: Demonstration of for loops

var x;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  
  // Counts 1-10
  for (x=1; x<=10; x++) {
    console.log(x);
  }
  
  // Counts 10-1
  for (x=10; x>=1; x--) {
    console.warn(x);
    
    //test:
    
    //textSize(20);
    //text(x+20,x*10,x);
  }
  
  // Counts in increments of 2
  for (x=0; x<=10; x+=2) {
    console.error(x);
  }


  for (x=1; x<=6; x++) {
    fill((x*20),(x*25),255);
    circle(200+(50*x),200,150);
    //ellipse(200,200,200,200);
  }
  
  noLoop();
}

var textBox = document.getElementById('text-box');
//console.log(textBox);


// Counts 1-10
for (x=1; x<=10; x++) {
  textBox.innerHTML += `<p>${x}</p>`; 
}

// Counts 10-1
for (x=10; x>=1; x--) {
  textBox.innerHTML += `<p style="color:#f1c40f;">${x}</p>`; 
}

// Counts in increments of 2
for (x=0; x<=10; x+=2) {
  textBox.innerHTML += `<p style="color:#cb4335;">${x}</p>`; 
}