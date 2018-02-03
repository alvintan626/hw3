function yourPatch(x, y) {
  noFill();
  stroke(0);
  rect(x, y, 300, 300);
  
for (i = 0; i < 151;   i = i + 5) {
  var x1 = x+i;
  var y1 = y+0;
  var x2 = x+i;
  var y2 = y+2*i;
  line(x1,y1,x2,y2);
} 
  
// FACE
  
  //face shape
  ellipse(x+75,y+150, 150); 
  //eyes
  ellipse(x+37.5, y+150, 40);
  ellipse(x+112.5, y+150, 40);
  
  //eyeball
  fill(0);
  ellipse(x+50, y+150,10);
  fill('red');
  ellipse(x+125, y+150,10)

  //mouth
  noFill();
	rect(x+50, y+170, 51, 20);
  
  //teeth
  fill('red');
  beginShape(TRIANGLES);
	vertex(x+80, y+170);
	vertex(x+90, y+210);
	vertex(x+100, y+170);
	endShape();
  
  // eyebrows
  fill('black');
  beginShape(TRIANGLES);
  vertex(x+15, y+130);
  vertex(x+65, y+130);
  vertex(x+15, y+110);
  endShape();
  fill('red');
  beginShape(TRIANGLES);
  vertex(x+90, y+130);
  vertex(x+140, y+130);
  vertex(x+140, y+110);
  endShape();
  
  //red side on right
  fill('red')
  rect(150,0,150,300)
  
  for (i = 150; i < 301;   i = i + 5) {
  var x11 = x+i;
  var y11 = y+0;
  var x22 = x+i;
  var y22 = y+300;
  line(x11,y11,x22,y22);
  }

  // initials for Alvin Tan
  fill(238);
  noStroke();
  rect(x+200, y+20, 20, 80);
  rect(x+220, y+20, 20, 20);
  rect(x+240, y+20, 20, 80);
  rect(x+220, y+60, 20, 20);
  
  rect(x+200, y+120, 60, 20);
  rect(x+220, y+140, 20, 60);
  
}

background(255);
yourPatch(0, 0); // draw patch at upper-left
