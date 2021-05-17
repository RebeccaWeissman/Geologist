class Iron{
	constructor(x,y,height,width)
	{
	// assign options to the iron
		var options={
			'restitution': 0.8,
			'friction': 3,
			'density': 30
		}
		this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(x, y, width, height, options);
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			var angle = this.body.angle;
			push()
			translate(ironpos.x, ironpos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("yellow");
			fill('yellow');
			rect(0,0,this.width,this.height);
			pop();
	}
}