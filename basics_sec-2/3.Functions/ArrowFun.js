// Arrow function and this keyword 

// const user = {
//     username:"abhishek",
//     price:"999",

//     welcomeMessage:function(){
//         console.log(`hi ${this.username}, welcome to website`)
//        // here we need to refer the current context  and to refer the current context we need to use this keyword

//         console.log(this)
//     }


// }

// user.welcomeMessage()

// user.username="sam"
// user.welcomeMessage()
/* this is first context
{
    username: 'abhishek',
    price: '999',
    welcomeMessage: [Function: welcomeMessage]
  }


  // 2nd context 
  {
  username: 'sam',
  price: '999',
  welcomeMessage: [Function: welcomeMessage]
}

  */


//console.log(this );  // {} an empty object but in broweser we get window as 

// here in node and this file global objct is {} an emoty obj
// where as in broweser window is global object 

// node is standalone engine 




// function chai(){
//     console.log(this);
// }

// chai();

// const chai = function(){
//     let username="abhishek"
//     console.log(this.username)
// }


const chai=()=>{
    let username="abhishek"
    console.log(this.username);


}

chai()


// basics syntax of arrow func
   // basic one 
// const addTwo= (num1,num2)=>{
//     return num1+num2
// }
  // if we use curly braces then we need to write return keyword 
  // else we need not to write 
// 2:
//const addTwo= (num1,num2)=> (num1+num2)
    // only single retun then we nned to need to use return  num1+num2


// i wnated to return an object 

const addTwo= (num1, num2)=>({username:"abhi"})



