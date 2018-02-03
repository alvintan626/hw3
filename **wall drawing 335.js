createCanvas(300,300)

for (i=0; i < 300; i = i+5) {
  line(i,0,i,300);
}

rect(50,50,75,75);

for (j = 0 ; j < 75 ; j = j + 5 ) {
  line(50,50+j,125,50+j);
}

var circl = ellipse(200,87.5,75);
for (j = 0 ; j < 75 ; j = j + 5 ) {
  line(200-j,50+j,200+j,50+j);
}
