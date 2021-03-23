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
module.exports = Person;