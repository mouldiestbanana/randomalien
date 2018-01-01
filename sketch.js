function setup() {
  createCanvas(500, 500);
    noLoop();
    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() {
  background(54, 54, 54);
   strokeWeight(5);
    stroke(253, 246, 235);
    
    
    //colours
    
  var colourArray = 
      [//yellow
          '#E0B65B', 
      '#F4B638',
      
       //red
       '#F48866',
      '#F16960',
      '#F37963',
   
          //blue
       '#2C8495',
    '#3FA1B3',
      '#52BDD0']
      
  var stars = ['#FDF6EB', '#FEF7E3', '#FFF8DC', '#E0B65B', '#F4B638']
  
  
  
      //background    
    push()
    for(var i = 0; i < 80; i++) {
    
        fill(random(stars));
        noStroke();
        
    ellipse(random(width*0.01, width), random(height*0.01, height), random(0, 5));
} 
pop()
    
    
  //shirt  
push()
    fill(random(colourArray));
quad(width*0.75, height, 
     width*0.25, height, 
     width*0.35, height*0.75, 
     width*0.65, height*0.75);
pop()
   
    
    
//antenna
     fill(random(colourArray));
    var distanceFromCenter = random(20, 100); 
    var antennasize = random (10, 75);
    var antenna1x = 250 - distanceFromCenter;
    var antenna2x = 250 + distanceFromCenter;
    var angleb = random(0, 100);
    var tightness = random(0, 3);
    
    push()
    noFill();
    curveTightness(tightness)
    curve(0, 0, antenna2x, 100, antenna2x, 200, 0, 500);
    
    curveTightness(tightness)
    curve(500, 0, antenna1x, 200, antenna1x, 100, 500, 0);
    pop()
    
    rect(antenna1x, 100, antennasize, antennasize, angleb);
    
    rect(antenna2x, 100, antennasize, antennasize, angleb)

    
    
    
//ears
    push();
     fill(random(colourArray));
var distanceFromCenterC = random(0, 110);
    var earsize = random (30, 130);
    var early = 300 - distanceFromCenterC;
    var earry = 300 - distanceFromCenterC;
    var angled = random(0, 100);

 rect(375, early, earsize, earsize, angled);
    
rect(125, earry, earsize, earsize, angled);
    pop();
   
    
//face 
    push()
     fill(random(colourArray));
    var anglea = random(0, 100);
   
    var collarwidth = random(20, 80);
    var collarheight = random(20, 60);
            
    //collar
    ellipse(width*0.5, height*0.85, collarwidth, collarheight);
    
    //face
    rect(width*0.5, height*0.6, width*0.5, height*0.5, anglea);
    pop();



//eyes
    push();
    fill(random(colourArray));
    var distanceFromCenterB = random(20, 110);
    var eyesize = random(20, 50);
    var eyelx = 250 - distanceFromCenterB;
    var eyerx = 250 + distanceFromCenterB;
    var eyely = 300 - distanceFromCenterB;
    var eyery = 300 - distanceFromCenterB;
    var anglec = random(0, 100);
    
    rect(eyelx, eyely, eyesize, eyesize, anglec);
    
    rect(eyerx, eyery, eyesize, eyesize, anglec);
    pop();

    
//pupils
    fill(253, 246, 235);
    var pupilPosition = random(-eyesize*0.3, eyesize*0.3);
    var pupilPosition2 = random(-eyesize*0.3, eyesize*0.3);
    
    push();
        translate(pupilPosition, pupilPosition2);
        rect(eyelx, eyely, eyesize*0.2, eyesize*0.2, anglec);
    pop();
    
    push();     
        translate(pupilPosition, pupilPosition2); 
        rect(eyerx, eyery, eyesize*0.2, eyesize*0.2, anglec);
    pop();
   
    
//mouth
    var distanceFromCenterD = random(20, 100);
    var mouthxl = 250 - distanceFromCenterD;
    var mouthxr = 250 + distanceFromCenterD;
    var mouthy = random(300, 400);
    
    var p1 = { x: 5, y: 5 };
    var p4 = { x: 10, y: 10 }; 
    
  line(mouthxl, mouthy, mouthxr, mouthy); 

}
