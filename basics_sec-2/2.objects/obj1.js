// how to declare objects
   //1:as literal   ->singleton not formed 
   //2:as constructor 
   // singleton ->when we make an oject using constructor form singleton obj only one instace 


//    object litrals :
//    Object.create  ->constructor method 

// obhect is collection of key:value pair 
// key by deafult is string we need not to specify 
// value can be any thing ->a variable


const mySymbol=Symbol("key1");  // sysmbol declartion 
   const jsUser ={

    name:"abhishek",
    "fullName":"abhishek kumar",

    [mySymbol]:"mykey12",  // here we are using a symbol as a key 
    email:"abhishek@gmai.com",
    age:24,
    location:"kanp",
    isLoggedIn:false,
    lastLoginDays:["sunday","monday"]


   }

   // how to access object

   // lets access email

   //console.log(jsUser.email)
   //console.log(jsUser['email']) // we need to pass key as string as it is store as string

   //  "fullName" wanted to access but using . we can't access
// ques: take a symbol and add to key of object 

// how to access it 
//console.log(jsUser[mySymbol]);

// note: we can't use .operator to access symbol in object 


// how to change value of object 

jsUser.email="google@google.com"

// we can also lock the values

//Object.freeze(jsUser)// it take an object as parameter and freezes that object 
// if we perform chnages it won't reflect but it won't throw any errors




jsUser.greeting= function(){
    console.log("hello js user ")
}

//console.log(jsUser.greeting); // [Function (anonymous)] function execute ni hua just uska return back aya hai 


jsUser.greeting2= function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting2());
