//Author: Amélie McCarthy
//Date: 2/12/24
//Purpose: Change colour variables per day/night

//House colour palette
var baseColour1, baseColour2, baseColour3;
var shadowColour1, shadowColour2, shadowColour3;
var accentColour1, accentColour2, accentColour3;
var roofColour1, roofColour2, roofColour3;
var windowColour;

//Street colours
var snowColour, roadColour, roadMarkColour;

//Snowman colours
var snowOutline1, snowOutline2, snowOutline3, carrotColour, scarfColour;

//Xmas tree colours
var treeStumpColour, treeLeaves1, treeLeaves2, treeLeaves3;

//Car colours
var wheelColour, headlightColour, staticHeadlight, backlightColour, windshieldColour, carColour1;

//Police car colours
var policeBodyColour, policeBlue, policeRed, policeBlueLight, policeRedLight;

function setVars() {
    //Static values

    //Car
    wheelColour = '#0c0c11';
    staticHeadlight = '#fde93e';
    headlightColour = color(255,235,65,70); //RGB format for added 4th transparency value
    backlightColour = '#fd5f52';

    //Police
    policeBlue = '#4457fe';
    policeRed = '#fe444c';
    policeBlueLight = color(68, 87, 254, 70); //with transparency
    policeRedLight = color(254, 68, 76, 70); //with transparency

    // Dynamic values
    if (day == true) {
        //House
        windowColour = '#9fc7da';

        baseColour1 = '#edefe4';
        shadowColour1 = '#dfe2cf';
        accentColour1 = '#92dbaa';
        roofColour1 = '#284647';
    
        baseColour2 = '#f6d394';
        shadowColour2 = '#d0af75';
        accentColour2 = '#9e5b6b';
        roofColour2 = '#3c2639';
    
        baseColour3 = '#cff19d';
        shadowColour3 = '#afd576';
        accentColour3 = '#7f5b3f';
        roofColour3 = '#414841';

        //Street
        snowColour = '#e8f2f8';
        roadColour = '#393e3b';
        roadMarkColour = '#eae659';

        //Snowman
        snowOutline1 = '#d2e3ee';
        snowOutline2 = '#b7cbd8';
        snowOutline3 = '#9bb6c8';
        carrotColour = '#f4a341';
        scarfColour = '#e02b4f';

        //Xmas tree
        treeStumpColour = '#432a0b';
        treeLeaves1 = '#1e4222';
        treeLeaves2 = '#2f5333';
        treeLeaves3 = '#3f6444';

        //Car
        windshieldColour = '#9fc7da';
        carColour1 = '#3e76bd';

        //Police
        policeBodyColour = '#1c2130';
    } else {
        //House
        windowColour = '#fffb84';

        baseColour1 = '#8690a1';
        shadowColour1 = '#4d5366';
        accentColour1 = '#376169';
        roofColour1 = '#121520';
    
        baseColour2 = '#965151';
        shadowColour2 = '#632f3b';
        accentColour2 = '#572e51';
        roofColour2 = '#1c1324';
    
        baseColour3 = '#5ba36f';
        shadowColour3 = '#33734a';
        accentColour3 = '#542626';
        roofColour3 = '#161c1a';

        //Street
        snowColour = '#bec5d7';
        roadColour = '#131818';
        roadMarkColour = '#b8994e';

        //Snowman
        snowOutline1 = '#b1bacb';
        snowOutline2 = '#8c98ad';
        snowOutline3 = '#5a667c';
        carrotColour = '#cf7e53';
        scarfColour = '#a53352';
        
        //Xmas tree
        treeStumpColour = '#29140a';
        treeLeaves1 = '#182f21';
        treeLeaves2 = '#293f32';
        treeLeaves3 = '#2a4f43';

        //Car
        windshieldColour = '#0c0c11';
        carColour1 = '#233568';

        //Police
        policeBodyColour = '#0a0b14';
    }
} //end setVars()