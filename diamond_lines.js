function yourPatch(x, y) {
  noFill();
  stroke(0);
  rect(x, y, 300, 300);

line(148,2, 152,2);  
for (i = 0; i < 141;   i = i + 10) {
  var x1 = 150-i;
  var y1 = i;
  var x2 = 150+i;
  var y2 = i;
  line(x1,y1,x2,y2);
} 
  for (i = 150; i < 301;   i = i + 10) {
  var x11 = i-150;
  var y11 = i;
  var x22 = 450-i;
  var y22 = i;
  line(x11,y11,x22,y22);
  }
line(148,297, 152,297); 
}

background(255);
yourPatch(0, 0); // draw patch at upper-left
