// constructor function
/*
function Contact() {
  this._prenom = 'Romain';
  // this.hello = this.hello.bind(this);
}

Contact.prototype.hello = function() {
  return 'My name is ' + this._prenom;
};

const romain = new Contact();
console.log(typeof romain); // object
console.log(romain.hello()); // My name is Romain
*/

// mot clé class
class Contact {
  constructor() {
    this._prenom = 'Romain';
  }
  hello() {
    return 'My name is ' + this._prenom;
  }
}


const romain = new Contact();
console.log(typeof romain); // object
console.log(romain.hello()); // My name is Romain