
// Example - 1

// function callback(){
//     console.log("I am a CallBack Function ... ");
// }

// function higherOrderFunction(func1){
//     console.log("I am a Higher Order Function ...")
//     func1()
// }

// higherOrderFunction(callback)

//map
//sort
//filter
//reduce
//every
//some

//map - 
//filter - 

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
]

//const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// //traverse through the data
// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }

//forEach
// companies.forEach(function(Company){
// console.log(Company)
// }
// )


//filter
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// //get 21 and older
//way-1
// let canDrink =[]
// for(let i=0; i<ages.length;i++){
//     if (ages[i]>=21){
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink)
//way-2
// const canDrink = ages.filter(function(age){
//     if(age>=21){
//         return true
//     }
// })
// console.log(canDrink);
//way-3
//arrow function : () => {}
// const canDrink = ages.filter((age) => age>=21
// )
       
// console.log(canDrink);


//filter finance compines

// const comp = companies.filter((companie)=>companie.category == "Finance" )
// console.log(comp)

//filter == 90's comp

// const comp = companies.filter(company => (company.start>=1990 && company.end<1999));
// console.log(comp)

// const company = companies.filter((company) => company.start >= 1990 && company.start <=1999);
// console.log(company);

// //filter  companies that lasted for 10 years

// const companiesLasted10Yrs = companies.filter(company => (company.end - company.start)>= 10);
// console.log(companiesLasted10Yrs);




// //map

// const companyName = companies.map(company => company.name)
// console.log(companyName)

//create an array of =square root and two times

//   const ageTwoTimes = ages.map(age => Math.sqrt(age))
//                             .map(age => age*2)
//   console.log(ageTwoTimes)


//   //companyone 1990-2024.....

//   const testMap = companies.map(
//     company => `${company.name}  ${company.start} - ${company.end}`//templet literal
//   )
//   console.log(testMap)
//sort 

companies.sort()
//find reduce sort

