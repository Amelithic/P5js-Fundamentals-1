function policeCar(x,y) {
    this.x = x;
    this.y = y;

    //using this.x and this.y allows for the variables to be changed, to move the car object

    this.display = function() {
        angleMode(DEGREES);
        fill(snowColour);
        arc(this.x + 70, this.y - 15, 100, 100, 180, 360); // main shell
        fill(windshieldColour);
        arc(this.x + 70, this.y - 15, 90, 90, 270, 360);  // car window 1
        arc(this.x + 60, this.y - 15, 60, 80, 180, 270);  // car window 2
        fill(policeBodyColour);
        rect(this.x, this.y - 35, 150, 30, 25);           // boot
        fill(snowColour);
        rect(this.x+25, this.y-35, 90, 30); //white stripe
    
        fill(wheelColour);
        circle(this.x + 30, this.y - 5, 30);              // wheel 1
        circle(this.x + 120, this.y - 5, 30);             // wheel 2
    
        stroke(roofColour1);
        strokeWeight(2);
        line(this.x + 35, this.y - 50, this.x + 20, this.y - 55);   // car antenna
        strokeWeight(0);

        fill(staticHeadlight);
        ellipse(this.x+142,this.y-25, 10,10); //front headlight
        fill(backlightColour);
        ellipse(this.x+5,this.y-25, 5,10); //rear/backlight

        //POLICE text
        fill(policeBodyColour);
        textSize(14);
        textStyle(BOLD);
        text('POLICE', this.x+45,this.y-15);

        //siren
        fill(policeBodyColour);
        rect(this.x+60,this.y-68,20,5); //base
        fill(policeBlue);
        rect(this.x+62,this.y-78,10,10,3); //blue light
        fill(policeRed);
        rect(this.x+68,this.y-78,10,10,3); //red light

        //siren beams
        fill(policeBlueLight);
        quad(this.x+62,this.y-78, this.x+30,this.y-90, this.x+30,this.y-70, this.x+62,this.y-76);
        fill(policeRedLight);
        quad(this.x+68,this.y-78, this.x+100,this.y-90, this.x+100,this.y-70, this.x+68,this.y-76);

        if (day != true) {
            fill(headlightColour);
            quad(this.x+142,this.y-30, this.x+280,this.y-50, this.x+250,this.y+15, this.x+142,this.y-20);
        }
    }
}