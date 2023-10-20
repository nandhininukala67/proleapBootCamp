// // promise:

// // let p=new Promise()
// // promise can take a call back fun

// // let p=new Promise(function(){})
// // this object returns some data either the promise success or not


// // let p=new Promise(function(resolve,reject){})

// let p=new Promise(
//     function (resolve,reject){
//         let data=false;
//         if(data){
//             //resolve("promise is fullfilled");
//             resolve([1,2,3,4]);
//         }
//         else{
//             reject("promise is not done")
//         }
//     }
// )
// console.log(p)
// p.then(function(data){//excuter function
//     console.log(data)


//     p.catch(function(reject){
//         console.log(console.error())
//     })

// })


