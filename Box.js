class Box extends BaseClass{
  constructor(x,y, width, height){

    // to transfer all properties of parent class to child class through constructor
    super(x,y,width, height);
    this.image = loadImage("sprites/wood1.png");
  }
  
}