const myNum=[1,2,3,4,5,6,7,8,9,10];
// for above numbers i need to add 10 in each and every individual


// map()is also call back function
// and it automatically return the value 


//  const newNums= myNum.map( (num)=> num+10 )
//  console.log(newNums);


// chaining 

 //we can use copule of method directly ---called chaining

 const res= myNum.map((num)=>num*10).map((num)=>num+2).filter((num)=>num>30)

 // first 10 will be multiply and in resultent  2 will be added
 console.log(res);


