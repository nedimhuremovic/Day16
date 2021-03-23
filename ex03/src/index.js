// Only change code below this line
    class Person {
        constructor(name){
            this._name = name;
        }
        static display(){
            console.log("Static method is invoked from Person class");
        }
        show() {
            Person.display();
        }

    }
// Only change code below this line

var message = new Person ();
message.show();
module.exports = Person;