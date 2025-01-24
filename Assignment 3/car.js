//Author: Amélie McCarthy
//Date: 2/12/24
//Purpose: Car templates

function Car1(x, y) {
    this.x = x;
    this.y = y;

    this.display = function() {
        angleMode(DEGREES);
        fill(scarfColour);
        arc(this.x + 70, this.y - 15, 100, 100, 180, 360); // main shell
        fill(windshieldColour);
        arc(this.x + 70, this.y - 15, 90, 90, 270, 360);  // car window 1
        arc(this.x + 60, this.y - 15, 60, 80, 180, 270);  // car window 2
        fill(scarfColour);
        rect(this.x, this.y - 35, 150, 30, 25);           // boot
    
        fill(wheelColour);
        circle(this.x + 30, this.y - 5, 30);              // wheel 1
        circle(this.x + 120, this.y - 5, 30);             // wheel 2
    
        stroke(roofColour1);
        strokeWeight(2);
        line(this.x + 35, this.y - 50, this.x + 20, this.y - 55);   // car antenna
        strokeWeight(0);

        fill(staticHeadlight);
        ellipse(this.x + 142, this.y - 25, 10, 10);       // front headlight
        fill(backlightColour);
        ellipse(this.x + 5, this.y - 25, 5, 10);          // rear/backlight

        if (day != true) {
            fill(headlightColour);
            quad(this.x + 142, this.y - 30, 
                 this.x + 260, this.y - 50, 
                 this.x + 250, this.y + 15, 
                 this.x + 142, this.y - 20);             // headlights at night
        }
    }
} // end Car1()


function Car2(x,y) {
    this.x = x;
    this.y = y;

    this.display = function() {
        angleMode(DEGREES);
        fill(carColour1);
        arc(this.x + 70, this.y - 15, 100, 100, 180, 360); // main shell
        fill(windshieldColour);
        arc(this.x + 70, this.y - 15, 90, 90, 270, 360);  // car window 1
        arc(this.x + 60, this.y - 15, 60, 80, 180, 270);  // car window 2
        fill(carColour1);
        rect(this.x, this.y - 35, 150, 30, 25);           // boot
    
        fill(wheelColour);
        circle(this.x + 30, this.y - 5, 30);              // wheel 1
        circle(this.x + 120, this.y - 5, 30);             // wheel 2
    
        stroke(roofColour1);
        strokeWeight(2);
        line(this.x + 35, this.y - 50, this.x + 20, this.y - 55);   // car antenna
        strokeWeight(0);

        fill(staticHeadlight);
        ellipse(this.x + 142, this.y - 25, 10, 10);       // front headlight
        fill(backlightColour);
        ellipse(this.x + 5, this.y - 25, 5, 10);          // rear/backlight

        if (day != true) {
            fill(headlightColour);
            quad(this.x + 142, this.y - 30, 
                 this.x + 260, this.y - 50, 
                 this.x + 250, this.y + 15, 
                 this.x + 142, this.y - 20);             // headlights at night
        }
    }
} //end Car2()
