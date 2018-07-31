let x = 32;
let dx = 1;
let y = 250;
let dy = 7;
let score = 0;

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background('#7CDBF5');
	fill('#DFF035');
	fill('#FEFF08');
	ellipse(x, 120, 150, 150);
	ellipse(x, 120, 120, 120);
	fill('#7CDBF5');
	ellipse(x, 120, 60, 60);
	fill('#3CE3AC');
	ellipse(x, 120, 140, 120);
	fill('#1985F5');
	ellipse(x, 300, 140, 120);
	fill('#FF0303');
	ellipse(x, 220, 160, 100);
	fill('#13CE1D');
	ellipse(x, 390, 160, 160);

	fill('#7CDBF5');
	ellipse(x, y, 60, 60);
	fill(1);
	ellipse(x, y, 40, 35);

	rect(mouseX, height - 30, 120, 25);


	if (x > width) {
		dx = - dx;
	}

	if (x < 0) {
		dx = - dx;
	}

	if (y < 0) {
		dy = - dy;
	}
	if (x > mouseX && x < mouseX + 120) {
		if (y > height - 30) {
			dy = - dy;
			score = score + 1;
		}
	}

	textSize(100);
	text(score, 50, 100);

	if (y > height + 50) {
		dy = 0;
		dx = 0;
		x = 2000;
		y = 2000;

		fill('#000000');
		textSize(50);
		text("упал в ад :(", 55, 250);
	}

	x = x + dx;
	y = y + dy;
}