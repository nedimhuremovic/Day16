class Person {
    constructor(name, email, age){
        this.Name = name;
        this.email = email;
        this.age = age;
    }
    getPerson(){
        let personInfo = {
            Name:this.Name,
            email:this.email,
            age:this.age
        }
        return personInfo;
    }
}
const per = new Person("Nedim", "nedimhuremovic@gmail.com", 26);
console.log(per);

exports.module = Person;