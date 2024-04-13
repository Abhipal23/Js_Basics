// Immediately Invoked Function Expressions (IIFE)

  // normal function 
// function chai(){
//     console.log('DB CONNECTED');
// }



// some time our file contain db connection and we wanted that as soon as application starts
// our db connection should also start 

// some time some variable declare in global scope and we don't wanted that these global varaible cause some 
// problem in that function...

// to avoid that this we make function as iife




// how to make a function iife
  // named iffe
(function chai(){
    console.log('DB CONNECTED');
})(); 
// we need to ; to end its execution 


// this is iife function 
// ()-> for function def 
// ()-> for function execution 


// using arrow function

// (()=>{
//     console.log("db is connected 2");
// })();

// make an  iffe with name as agrument

// unamed iffe
((name)=>{
    console.log(`db is connected with ${name}`)
})('abhishek');