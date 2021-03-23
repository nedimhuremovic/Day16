// Only change code below this line
class Pets {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }
  walk(numberOfLegs) {
    numberOfLegs = this.legs;
    return this.name + " is walking on " + numberOfLegs + " legs";
  }
}
class Dog extends Pets {
  constructor(name, legs) {
    super(name, legs);
    //this.legs = legs;
  }
  bark(dogSay) {
    dogSay = " says WUF-WUF";
    return this.name + dogSay;
  }
}
// Only change code below this line

let dog = new Dog("Ćuko", 4); // Change this line

console.log(dog.walk());
console.log(dog.bark());

module.exports = {
  Pets,
  Dog,
};
