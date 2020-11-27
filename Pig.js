class Pig extends BaseClass{
  constructor(x,y){

    // to transfer all properties of parent class to child class through constructor
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }
  
}