//example 1:

class Person{

    static species(){
         return "Home sapiens"
    }

    static speciesSentence(){
        return `Human as ${this.species()}`
        //this.species === person.species
   }



    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.hasJob = false
    }
    get fullName(){
        //return "${this.firstName}"+ " " + "${this.lastName}"
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        name= name.split(' ')
        this.firstName=name[0]
        this.lastName=name[1]
    }

    //setter 
    setFirstName(firstName){
        this.firstName = firstName
    }

    setLastName(lastName){
        this.lastName = lastName
    }

    //getter
    get firstName(){
        return this.firstName
    }

}
const object = new Person('abc','cde')

object.setFullName('neeha kotaptolu')//like method

object.fullName="nandhini nukala"

console.log(object.firstName)

// object.setFirstName('java')
// console.log(object.getFirstName())


// const object = new Person('Java','python')
// console.log(object)
// object.setFirstName('Akash')
// console.log(object.fullName())
// console.log(Person.species)