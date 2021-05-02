function setup() {
	createCanvas(1000, 1000);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mazeGenerator()
  var solver = createSprite(0, 0, 10, 10)
  solver.shapeColor = color(RGB(0, 0, 0))

  for (let r = 0; r < mazeBlocks.length; r++) {
	  target = mazeBlocks[r]
	  solver.collide(10, target)
  }


  drawSprites();
}

