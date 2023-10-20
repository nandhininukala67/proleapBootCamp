function getData()
{

}

// const user = {
//     name: 'Alex',
//     "full name": 'Alex Jasper',//spaces between key name use ""
//     age: 18,
//     location: 'Delhi',
//     action: function talk(){
//         console.log("talking")
//     },
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]

// }
// console.log(user.name)

// user.action()

// console.log(user.action)
// console.log(user.action())

const user = {
    name: 'Alex',
    "full name": 'Alex Jasper',//spaces between key name use ""
    age: 18,
    location: 'Delhi',
    action1: function talk(){
        console.log("talking")
    },
    action2: function walk(){
       return"walking"
    },
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(user.name)

// console.log(user.action2)
// console.log(user["full name"])
// //console.log(user.full name)
user.email = "abcd@abc.com"
user.getting = function(){
    console.log("Good Morning")
}

console.log(user.getting())
console.log(user.email)
console.log(user)