// we will see how to declare variables

const accountId=12345;
let accountEmail="abhishek@gmail.com"
var accountPass="123456"

let state;


/* accountId=12356  
 accountId=12356   we can't reassign a const  
         ^

// TypeError: Assignment to constant variable.
*/
console.log(accountId);
console.table([accountEmail,accountId,accountPass,state])
// this method will print all varaible which were passed in array in tabluar format 

/*
   note : don't use var as of issue in scope and fuctional scope 
*/


