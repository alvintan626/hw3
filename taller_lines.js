function yourPatch(x, y) {
  noFill();
  stroke(0);
  rect(x, y, 300, 300);
  
for (i = 0; i < 151;   i = i + 5) {
  var x1 = i;
  var y1 = 0;
  var x2 = i;
  var y2 = 2*i;
  line(x1,y1,x2,y2);
} 
  for (i = 150; i < 301;   i = i + 5) {
  var x11 = i;
  var y11 = 0;
  var x22 = i;
  var y22 = 300;
  line(x11,y11,x22,y22);
  }

}

background(255);
yourPatch(0, 0); // draw patch at upper-left

