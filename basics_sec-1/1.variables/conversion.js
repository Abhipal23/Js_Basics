
/*
1. Number conversion

let score="33abc"

console.log(typeof score)

let valueInt = Number(score); //33

console.log(valueInt) //NaN

console.log(typeof(valueInt))




"33"->33
"33abcs"->NaN
true->1
false->0

2: boolean conversion 

let isLoggedIn =1
let booleanIsLogIn= Boolean(isLoggedIn);
console.log(booleanIsLogIn)  //true
console.log(typeof isLoggedIn)// number



1->true
0->false
""-> false (emoty string )
"hello"->true


//3 String converson 

let someNumber =3;

let stringNumber =String(someNumber)

console.log(typeof stringNumber);
console.log(stringNumber)

*/


// ************************ Operations in js *************************



// let value=3
// let negate=-value

// console.log(negate)
// console.log(2+2)
// console.log(2*3)
// console.log(2/3)
// console.log(5%4)


// let str1="hello "
// let str2= "abhishek"
//console.log(str1+str2)   it is very simple concatination operation 

// let see some complex 
//console.log("1"+2); // here one is string and other is number o/p 12 
// lets check its type 

// let newVar = "1"+2
// console.log(typeof newVar)//string
//  newVar = 1+"2"
//  console.log(typeof newVar) //string

//  newVar=1+2+"3"  // here we go from left side first we will add 1+2=3 the concat -> 33

//  console.log(newVar);

//  newVar=1+5+"3"
//  console.log(newVar);  // 63

//  newVar="1"+3+2
//  console.log(newVar);   //132 ->"1"+3=concat 13 which is a string then 2 which will be not addes as it will be concatnetd




//************************** Comparison ******************************************/
// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(1==1)
// console.log(2!=1)
// console.log(2>1)

//   === -special js comparsion operator 

// which will compare value and its data type 

// let x= 32
// let y ="32"

// console.log(x==y)   // true

// console.log(x===y) // false
// let z="32"

// console.log(y===z) ///true


console.log(null>0);   // false 
console.log(null==0);  // false 
console.log(null>=0);  // true
