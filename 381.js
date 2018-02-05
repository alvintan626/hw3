// The four colors in Wall Drawing 381 are arranged based on the system that Sol LeWitt would eventually codify for the organization of 
// the four basic types of lines. The lines are organized in a square divided into four equal parts with vertical in the top left, 
// horizontal in the top right, diagonal left in the bottom left, and diagonal right in the bottom right.

createCanvas(300,300);

// whole square
rect(0,0,300,300) 

// top left vertical
stroke('gray');
for (i = 0; i < 151 ; i = i+1) {
  line(i,0,i,150);
}

// top right horizontal
stroke('yellow');
for (j = 0; j < 151 ; j = j+1) {
  line(150,j,300,j);
}

// bottom left diag left
stroke('pink');
for (k = 0; k < 151 ; k = k+1) {
  line(k,150,0,150+k);
}

for (kk = 0; kk < 151 ;kk = kk+1) {
  line(150,150+kk,kk,300);
}

// bottom right diag right
stroke('blue');
for (l = 0; l < 151 ; l= l+1) {
  line(300-l,150,300,150+l);
}

for (ll = 0; ll < 151 ;ll = ll+1) {
  line(150,150+ll,300-ll,300);
}
