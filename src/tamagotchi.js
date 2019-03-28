import $ from 'jquery';

export default class Tamagotchi {
  constructor(name, birthday) {
    this.name = name;
    this.hunger = 0;
    this.droppings = 0;
    this.tiredness = 0;
    this.sick = false;
    this.dead = false;
  }

  start() {
     setInterval(() => {
      this.increaseHunger();
      this.increaseTiredness();
    }, 1000);
  }

  increaseHunger() {
    this.hunger++;
  }

  feedSnack() {
    this.hunger-- ;
  }

  feedMeal() {
    if (this.hunger >= 2) {
      this.hunger -= 2;
      setTimeout(() => {
        this.droppings++;
      }, 4000);
    }
  }

  increaseTiredness() {
    this.tiredness++;
  }

  sleep() {
    this.tiredness = 0;
  }

  getSick() {
    let counter = 0;
    if (this.tiredness >= 5) {
      counter++;
    }
    if (this.hunger >= 5) {
      counter++;
    }
    if (this.droppings >= 3) {
      counter++;
    }
    if (counter >= 2){
      this.sick = true;
      if(counter==3)
      {
        this.die();
      }
    }
  }

  giveMedicine() {
    this.sick = false;
  }

  cleanPoops() {
    this.droppings = 0;
  }

  die() {
    this.dead = true;
    $('#tamagotchiHome').hide();
    $('#deadRow').show();
    $('#isDead').text(`${this.name} has died. Next time, make sure you take better care of it.`);
  }
}
