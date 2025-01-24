function snowman(x,y) {
    
    this.x = x;
    this.y = y;

    this.display = function() {
        strokeWeight(2);
        fill(snowColour);
        stroke(snowOutline3);
        circle(x,y-(70/2), 70); //largest circle
        stroke(snowOutline2);
        circle(x,y-70, 50); //medium circle
        stroke(snowOutline1);
        circle(x,y-95, 30); //smallest circle
        
        strokeWeight(0);
        fill(carrotColour); //carrot
        triangle(x,y-90, x+15,y-75, x+10,y-90);
        fill(roadColour); //eyes
        circle(x-3,y-97, 5);
        ellipse(x+10,y-97, 2.5,5);

        //buttons
        circle(x,y-35, 5);
        circle(x,y-55, 5);
        circle(x,y-70, 5);
    }
  } //end snowman()

function snowmanWithHat(x,y) {

    this.x = x;
    this.y = y;

    this.display = function() {
        strokeWeight(2);
        fill(snowColour);
        stroke(snowOutline3);
        circle(x,y-(70/2), 70); //largest circle
        stroke(snowOutline2);
        circle(x,y-70, 50); //medium circle
        stroke(snowOutline1);
        circle(x,y-95, 30); //smallest circle
        
        strokeWeight(0);
        fill(carrotColour); //carrot
        triangle(x,y-90, x+15,y-75, x+10,y-90);
        fill(roadColour); //eyes
        circle(x-3,y-97, 5);
        ellipse(x+10,y-97, 2.5,5);

        //buttons
        circle(x,y-35, 5);
        circle(x,y-55, 5);
        circle(x,y-70, 5);

        //hat
        rect(x-10,y-110, 20,3);
        rect(x-6,y-120, 12,10);
    }
} //end snowman()

function snowmanWithScarf(x,y) {
    
    this.x = x;
    this.y = y;

    this.display = function() {
        strokeWeight(2);
        fill(snowColour);
        stroke(snowOutline3);
        circle(x,y-(70/2), 70); //largest circle
        stroke(snowOutline2);
        circle(x,y-70, 50); //medium circle

        //scarf
        noStroke();
        fill(scarfColour);
        rect(x-20,y-92, 40,10);
        quad(x+8,y-90, x+12,y-65, x+22,y-70, x+18,y-90);

        fill(snowColour);
        strokeWeight(2);
        stroke(snowOutline1);
        circle(x,y-100, 30); //smallest circle
        
        strokeWeight(0);
        fill(carrotColour); //carrot
        triangle(x,y-95, x+15,y-80, x+10,y-95);
        fill(roadColour); //eyes
        circle(x-3,y-102, 5);
        ellipse(x+10,y-102, 2.5,5);

        //buttons
        circle(x,y-35, 5);
        circle(x,y-55, 5);
        circle(x,y-70, 5);
    }
  } //end snowman()