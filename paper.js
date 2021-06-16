class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
            restitution : 0.3,
            friction : 0,
            density :1.2			
			}
		this.x=x;
		this.y=y;
		
this.image= loadImage("paper.png")

		this.body=Bodies.rectangle(x, y, 50,50 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(0);
			
            imageMode(CENTER);
            image(this.image,0, 0, 80, 80);
			pop()
			
	}

}