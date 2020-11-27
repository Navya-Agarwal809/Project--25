class Log extends BaseClass{
  constructor(x,y, height, angle){

    // to transfer all properties of parent class to child class through constructor
    super(x,y,20, height, angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle); 
  }

}
