const user1 = userCreatos("Annaya,4");
function userCreatos(name,score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    };
    return newUser
}









// const user = {
//     name : "Alex",
//     score : 3,
//     increment : function(){
//         user.score++
//     }
// }
// user.increment()//4