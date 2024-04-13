// function : 

// syntx:
// function(){

// 


// function sayMyName(){
//     console.log("abhishek kumar ");  // function scope
// }

// the whole above thing is function defination 



// sayMyName // function's refernece it won't execute 

// sayMyName()// function execution 



function addTwo(number1 , number2){
    // in function defination input is called  parameters
    return number1+number2
    // we our not returning a value by default undifined is returned

}

//console.log(addTwo(3,4));
// when we pass values to our function then values is called agruments


function loginUserMessage(username="sam"){
                           // here we provide a deafult value
    if(username===undefined){

       // if(!username)// this is equal to username===undifiend also rec
        console.log("Please provide valid user name ");
        return
    }
    return `${username} just login in `
}

//console.log(loginUserMessage("abhisehk"));
//console.log(loginUserMessage());  // undefined just login in  as by default username is undifined 






// function we don't know the number of agruments 


function calculatePrice(...num){
    // here it is called rest operator here it is an 1-d array 
    

    let sum =0;
    for(let i =0; i<num.length; i++){
        sum+=num[i];
    }
    return sum;

}

const totalPrice = calculatePrice(20,30,55,30)  // 135

//console.log(totalPrice);
const user={
    username:"abhi",
    price:50
}
function handleObj(obj){
          console.log(`UserName is ${obj.username} and price is ${obj.price}`);
}

handleObj(user);

