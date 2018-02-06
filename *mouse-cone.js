function yourPatch(x, y) {
  noFill();
  stroke(0);
  rect(x, y, 300, 300);

for (i=0; i<301; i=i+10) {
  line(150,0,300-i,300);
}
}

background(255);
yourPatch(0, 0); // draw patch at upper-left
