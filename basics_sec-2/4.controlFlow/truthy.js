// // turty and falsy value 

// // we qurery from db and to get userEmail 
// // and we get userEmail

// const userEmail ="abhi@.ai"

// if(userEmail){
//     // here we did't do any comparison 
//     // we assume this string is truth -- this is called truty value 
//     // and if there will be empty string then it assumes false -fasly value 
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email");
// }



// // faslsy value 
//      //false,0 ,-0,BigInt 0n,"",null,undefined,NaN  ->all are falsy and except these all are truty value 


//      // truty 
//       // any thing which add in string is truty 
//          //"0",'false'," ",[],{},function(){}



//          // chek obj is emoty 


//          const obj1={}
//          if(Object.keys(obj1).length===0){
//             //Object.keys(obj1)-- will return an array 
//             console.log("empty array ");
//          }


// nullish Coalescing operator (??): null undifined 

let val1;
val1=5 ?? 10;  // jo bhi first value milega vo assign ho jyega 


val1=null ?? 12 // if i did't get nay value assign null

val1 =undefined ?? 34 

console.log(val1);



// turnery operat

// condition ? true: false