function yourPatch(x, y) {
  noFill();
  stroke(0);
  rect(x, y, 300, 300);

  strokeWeight(2);
for (i=10; i<300; i=i+10) {
  ellipse(150,150,i);
}
}

background(255);
yourPatch(0, 0); // draw patch at upper-left



OR 



function yourPatch() {
  noFill();
  stroke(0);
  
	for (i=10; i<300; i=i+10) {
  ellipse(150,150,i);
	}
}

background(255);
yourPatch(0, 0); // draw patch at upper-left
