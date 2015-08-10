'use strict'

function Tree(){
  this.age = 0;
  this.height = 0;
  this.isAlive = true;
  this.oranges = [];

  this.grow = function(){
    if(this.isAlive){
      this.age++;
      this.height += 10;
      for (var i = 0; i < this.getRandomNum(); i++) {
        this.oranges.push(new Orange());
      }
      this.checkHealth();
    }
  },

  this.checkHealth = function(){
    if(this.age >= 50){
      this.isAlive = false;
    }
    console.log('Your tree has died.');
  },

  this.pickOrange = function(){
    return this.orange.pop();
  },

  this.getRandomNum = function(){
    Math.floor(Math.random() * (10) + 1);
  }
}()
