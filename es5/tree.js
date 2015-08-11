//Example of RequireJS or Browserify using CommonJS
// var Orange = require('./orange.js');

function OrangeTree(){
  "use strict"
  this.age;
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
    return this.oranges.pop();
  },

  this.getRandomNum = function(){
    return Math.floor(Math.random() * (10) + 1);
  }
}
