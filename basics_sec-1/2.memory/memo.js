// ####################### Memory in js ############################################################

/*
stack and heap 

stack :   used for primitive data types 
          we get copy of varaible 

Heap:     used for non -primitive data types
          we get refecne of data types   
*/


let myYoutubeName="abhishekPal" /// this will go in stack 

let anotherName = myYoutubeName  // here a copy of myYou... will be given not refeence 

anotherName="ak";
//now chck value m
console.log(myYoutubeName);
console.log(anotherName);




let user1={
    email:"abhishek@gmail.com",
    upi:"user@ybl"
}

let user2=user1;
user2.email="abhishek.pal@outlook.com"
console.log(user1.email);  // abhishek.pal@outlook.com
console.log(user2.email);  // abhishek.pal@outlook.com