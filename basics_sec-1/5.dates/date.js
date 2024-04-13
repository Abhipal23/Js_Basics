// //Date objects represented a single moment in time in plattform indpendedt format 

// let myDate = new Date();
// console.log(myDate.toString())   // Tue Apr 09 2024 15:01:46 GMT+0530 (India Standard Time)



// console.log(myDate.toDateString())  //  Tue Apr 09 2024


// console.log(myDate.toLocaleString())    // 4/9/2024, 3:02:15 PM

// console.log(typeof myDate);    // object


// to declare a specfic date 

// let myNewDate= new Date(2023,8,23); // 2023-10-22T18  month start fromm zero

// //console.log(myNewDate.toDateString());

// let myNewDate2= new Date("23-09-1997");
// console.log(myNewDate2.toDateString());



// ####################################### Time stamp #####################################

// // timestamo used in pools 
// console.log(Date.now())  // gives right now date in milisec
// // i need in sec

// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()

// console.log(newDate)
// console.log(newDate.getTime());

// console.log(newDate.getDay());  // 2 tuesday 


// to custimize date 

newDate.toLocaleString('default',{
    weekday:"long",
    

})