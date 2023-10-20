class Person{   //Assignment===>can a class have a private variables?
    static species(){
        return "Homo Sapiens"
    }

    static speciesSentence(){
        return `Humans are classified as ${this.species()}`
    }

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.hasJob = false
    }
fullName(){ 
        return `${this.firstName} ${this.lastName}`
    }

    setFirstName(firstName){
        this.firstName = firstName
    }

    setLastName(lastName){
        this.lastName = lastName
    }
}
class Employee extends Person{ 
    constructor(firstName, lastName, job){
        super(firstName, lastName) // immediate Parent Class 
        this.job = job
        this.hasJob = true;
    }

}
const object = new Employee('Rashmi', 'Mogare', 'Dev')

console.log(object)
console.log(Employee.species())