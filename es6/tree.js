import Orange from './orange';

class OrangeTree {
  constructor() {
    this.age = 0;
    this.height = 0;
    this.isAlive = true;
    this.oranges = [];
  }

  grow(){
    if(this.isAlive){
      this.age++;
      this.height += 10;
      for (var i = 0; i < this.getRandomNum(); i++) {
        this.oranges.push(new Orange());
      }
      this.checkHealth();
    }
  }

  checkHealth(){
    if(this.age >= 50){
      this.isAlive = false;
    }
    console.log('Your tree has died.')
  }

  pickOrange() {
    return this.orange.pop();
  }

  getRandomNum(){
    Math.floor(Math.random() * (10) + 1)
  }
}

export default OrangeTree;
