function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(220, 100, 100);
  } else if (key == 'G') {
    fill(0, 200, 0);
  } else if (key == 'B') {
    fill(100, 100, 220); 
  } else if (key == 'P') {
    fill(100, 100, 100); 
  } else if (key == 'O') {
    fill(200, 200, 200); 
  } else if (key == 'T') {
    fill(200, 100, 200); 
  } else if (key == '1') {
		diameter = 11;
  } else if (key == '2') {
		diameter = 22;
  } else if (key == '3') {
		diameter = 33;
  } else {
    fill(0); 
  }
}
