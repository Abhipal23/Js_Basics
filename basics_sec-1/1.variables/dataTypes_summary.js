/*
 ####   primitive data types : primitive data types are call by value 
     x=7 y=x: we are copying the data of x not refereing to x 
     making changes in y won't affect value of x


     1: String 
     2: Number 
     3: Boolean 
     4: Null        
     5: undifined 
     6: Symbol
     7:BigInt 

     c

     js is dynamic typed lang 


    const score=100;
    const scoreValue=100.2
    const isLoggedIn = false;
    const outSideTemp=null

    let useEmail   //un

    const id =Symbol('1234')
    const id2=Symbol('1234')
    console.log(id==id2) // false


#### Reference Type(non primitive ) reference will be provided 
    1:Arrays
    2:Objects 
    3:Functions 


    */

    const heros=["shaktiman", "naagraj","doga"];
    let obj={
        name:"abhishek",
        age :22,
    }

    const myFun=function(){
        console.log("hello world!")
    }

    myFun
  
