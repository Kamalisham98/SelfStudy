class Person {
  static isAlive = true;
  constructor(name, address, isMarried) {
    this.name = name; // instance properties
    this.address = address;
    this.isMarried = isMarried;
  }

  walk() {
    console.log(`${this.name} is walking! `);
  }
  run() {
    console.log(`${this.name} is running! `);
  }
  jogging() {
    this.walk();
    this.run(); // method properties
  }

  static talk(message) {
    console.log(`someone talk, ${message}`);
  }
  //update object value using function
  changeAddress(address) {
    this.address = address;
  }
}

//add instance method
Person.prototype.watch = function () {
  console.log(`${this.name} is watching football`);
};

let person1 = new Person("Reza", "Magelang", false);
let person2 = new Person("kamal", "Bandung", false);

console.log(person1);
person1.walk();
console.log(person2.name);
console.log(Person.isAlive);
person1.jogging();
Person.talk("Hello guys");
// Person.wake();

person1.watch();

person1.isMarried = true; // update object
console.log(person1);
person2.changeAddress("Tangsel");
console.log(person2);
