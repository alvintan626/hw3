createCanvas(300,200);
stroke(25);
rect(0,0,300,200);

//paintboard
fill(51,153,255);
beginShape();
vertex(0, 0);
vertex(200, 40);
vertex(200, 140);
vertex(0, 200);
vertex(0, 0);
endShape();

fill(255,103,103);
beginShape();
vertex(300,0);
vertex(300,200);
vertex(200, 140);
vertex(200, 40);
vertex(300,0);
endShape();

//left pyramid
fill(204,0,0);
beginShape();
vertex(150,50);
vertex(180,80);
vertex(165, 120);
vertex(150,50);
endShape();

fill(255,103,103);
beginShape();
vertex(150,50);
vertex(165, 120);
vertex(120, 150);
vertex(150,50);
endShape();

fill(204,204,0);
beginShape();
vertex(150,50);
vertex(120, 150);
vertex(90,160);
vertex(150,50);
endShape();

fill(255,128,0);
beginShape();
vertex(150,50);
vertex(90,160);
vertex(60,140);
vertex(150,50);
endShape();

fill(153,76,0);
beginShape();
vertex(150,50);
vertex(60,140);
vertex(35,90);
vertex(150,50);
endShape();

// square pyramid top
fill(224,224,224)	;
beginShape();
vertex(245,40);
vertex(265,55);
vertex(245,70);
vertex(225,55);
vertex(245,40);
endShape();

fill(0,204,102);
beginShape();
vertex(265,55);
vertex(280,140);
vertex(245,155);
vertex(245,70);
vertex(265,55);
endShape();

fill(153,51,255);
beginShape();
vertex(245,70);
vertex(245,155);
vertex(215,125);
vertex(225,55);
vertex(245,70);
endShape();
