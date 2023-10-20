
// -- callback function
let pizza
function orderPizza(callback){
    console.log('Order Pizza')
    setTimeout(() => {
        pizza = `🍕` // data
        console.log(`${pizza} is ready`)
        callback(pizza)    // call me pass me the data      
    }, 4000)
       
}
function pizzaReadyToEat(pizza){
    console.log(`Eat ${pizza}`)
}

orderPizza(pizzaReadyToEat)
 
console.log(`Calling a friend`)