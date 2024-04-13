// const score=400
// // explicitlly difine data type 

// //console.log(score)  // 400

// const balance= new Number(500);

////console.log(balance);  // [Number: 500]


// lets see some protype of number 

//console.log(typeof balance.toString()) // string and we can apply all methods strings

//console.log(balance.toFixed(2))   // to fix precsion value 

// const otherNumber = 23.8966


// console.log(otherNumber.toPrecision(3));  // ???


// const maxValue=Number.MAX_VALUE;



//###################### MATHS ##############################################

// console.log(Math); // OPEN in console to more of it
// Math.abs(-4) // Negative value converted into positive 

// Math.round(4.6)

// Math.max(4,5,33)

//console.log(Math.random()) // value cmes 0t o 1 
// i need value from 1 to 9

console.log((Math.random()*10+1).toFixed(0))

// generate random value in between two values

const min =10
const max=20;

//Math.floor(Math.random()*(max-min+1)+min)
console.log(Math.floor(Math.random()*(max-min+1)+min));

