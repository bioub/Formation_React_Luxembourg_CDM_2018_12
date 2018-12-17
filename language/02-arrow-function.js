'use strict';

// function Hello() {
//   return 'Hello';
// }

const Hello = () => 'Hello';

class Clock {
  constructor() {
    this.now = new Date();
    setInterval(() => {
      this.now = new Date();
      console.log(this); // si pas de arrow function this !== Clock
    }, 1000);
  }
}

new Clock();