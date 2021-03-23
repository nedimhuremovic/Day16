// Only change code below this line
    class Pets {
        constructor (name){
            this.name = name;
            }
        walk(numberOfLegs){
            this.legs = numberOfLegs;
            console.log(this.name + " is walking on " + numberOfLegs + " legs")
        }
    }
    class Dog extends Pets {
        constructor(name, legs){
            super(constructor(name));
            this.legs = legs;
        }
        bark(dogSay){
           dogSay = " says WUF-WUF";
           console.log(this.name + dogSay);
        }
    }
// Only change code below this line

let dog = new Dog("Ćuko", 4); // Change this line

console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}
