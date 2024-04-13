// const tinderUser =new Object()  ->singleton object 

const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="abhi"
tinderUser.isLoggedIn =false

//console.log(tinderUser)

// nested objects

const regulaUser={
    email:"abhi@gmail.com",
    fullNmae:{
        userNameFull:{
            firstName :"abhishek",
            lastName:"pal"
        }
    }
}

// lets access

//console.log(regulaUser.fullNmae.userNameFull.firstName);

// to much safe when response come from api

//console.log(regulaUser.fullNmae?.userNameFull?.lastName);   // ? it will check wheather fullNmae exit of 
// insted of if else  we use this 




// how to combine two objects

const obj1={1:"a",
2:"b"}
const obj2={
    3:"ab",
    4:"b"
}

//const obj3= {obj1 ,obj2} // it will give a nested object

//const obj3= Object.assign(obj1,obj2); // here obj1 is target and obj2 is source 

//const obj4= Object.assign({},obj1,obj2); // {}->optional parameter  used to assure that all values will be combined and we will get gurrtende object 

// {}-> treated as target and all remiang as source 
//good practice ti use this 

//console.log(obj3);

// another and most used using spred opertaor 


// const obj3= {...obj1,...obj2};
// console.log(obj3)



// when values coming database as array of object 

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    }
]

// how to access
//users[1] // after this it become obj

//console.log(users[0].email);

//console.log(tinderUser)

// i wnated all the key of object 

//console.log(Object.keys(tinderUser)); // output will an array

//console.log(Object.values(tinderUser));

// check value exits or not 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true