// Promise is opbject represnting the eventual completation or failure of asyc operation
// Promise is createad and consumed
// lets see how to create promise
// const promiseOne = new Promise(function(resolve,reject){
//     // do async call
//     // db calls, cryoptography related
//     // network releated 

//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve()// when this resolve execute then it will be connected to .then
//     },1000)

// })


// lets consume above promise 

// promiseOne.then(function(){
//     console.log('promise is consumed');
// })
// then is an call back function 
// resolve have connection with then 



// another way to create and consume promises

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async call 2 is completed ')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('async 2 is completed');
// })




// console.log("---------------------");

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"abhishek",email:"abhishek@gmail.com"})
//     },1000)

// })

// promiseThree.then(function(user){
//     // user is object which we passed in resolve 
//     console.log(user);
     
// })



// const promiseFour = new Promise(function(resolve,reject){
//        setTimeout(function(){
//            let error = true
//            if(!error){
//                 resolve({username:"abhi",userId:"231"})
//            }
//            else{
//                reject('somthing went wrong ')
//            }
//        },1000)
// })


// promiseFour.then(user=>{
//     console.log(user);
//     return user.username
//     // where this value will be retiun ?...we can apply chainging of then that will catch this valu e
// }).then((userName)=>{
//     // this then we get the value which is return by above then 
//     console.log(userName);

// }).catch((error)=> console.log(error))
// .finally(()=>console.log('promise is either resolve or rejected ')
// // this block of code will always execute irrespective of rject or reslove 
// )

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error){
             resolve({username:"abhi",userId:"231"})
        }
        else{
            reject('Error: somthing went wrong ')
        }
    },1000)
});
// lets see another approch  using asyc and await 
// here we are not handling catcg gracfully but some time when needed we can do it


async function consumePromiseFive(){
//   const response =   await promiseFive;  // value from promiseFive will come here as resposne 
//   // as promise is an obejct don't comnsume as fucntion()
//   console.log(response);

  // we need to handle above code in try catch
  try {
    const response =   await promiseFive;
    console.log(response.username);
    
  } catch (error) {
    console.log(error);
    
  }

}
// consumePromiseFive()


// how to use with api :
// async function getUserData(){
//                try {
//                 const response  =  await fetch('https://jsonplaceholder.typicode.com/users')
//                // console.log(response);
//                 const data =  await response.json()  // this needs time to convert,so we use await 
//                 console.log(data);
//                } catch (error) {
//                 console.log(error);
                
//                }

// }

//getUserData();

// write above thing using then and catch 

fetch('https://jsonplaceholder.typicode.com/users').
then((response)=>{
       return response.json()
}).then((data)=>{
      console.log(data);
}).catch((error)=>console.log(error))