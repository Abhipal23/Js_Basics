/*
 Arrays : arrays is linear data structure

 */


 // declartion:
   //1 way
 const myArr =[0,1,2,4,5,"abhishek",true];


 //2 : way 
 const myArray2= new Array(1,5,6,7);
 // in javaScript array are hetrogenious
 // js is resizeable 
 // zero-index based
 // arrays's copy operation make shallow copy not deep copies 
    // shallow copy of an object is a copy where properties share the same refrence 
       // any changes in a copy one object will refelect in original also 


       // where as deep copy of an object is whoose  properties do't share same refence 


// method in array as  we also get protoype 
myArray2.push(6);   /// [ 1, 5, 6, 7, 6 ] pushes element at the end 
myArray2.push("del"); // [ 1, 5, 6, 7, 6, 'del' ]
//let deletedVal =myArray2.pop(); // del : pop will remove the last elemet and simply return it 
//console.log(deletedVal)


//myArray2.unshift(9);  //[ 9, 1, 5, 6, 7, 6 ] simoly add element in starting of array 
// it is not optimized method as it will shift each elemet by 1 for n it will do n-1 shfts 

//let shiftEle = myArray2.shift()
///console.log(shiftEle);  // elent at 0th index will be removed 






//console.log(myArray2.includes(9))  // will return true or false depening on elemet found or not

// console.log(myArray2.indexOf(12));  // 3 it will simpy return the index of elemet if it found else -1



 const  arr1=[1,28,9,5,35];
// const   arr2=["hello","abhishek",23];

// const newArr3=arr1.join()  // join() add all elemets of array into a string 

// console.log(arr1)   // [ 1, 28, 9, 5 ]
// console.log( newArr3) // 1,28,9,5   typeOf -> string



// slice and splice 

console.log("A",arr1);



const myN1=arr1.slice(1,3)  // give a subarray start from 1 and till 2 not 3\  and also it won't modify original array 


console.log(myN1);

console.log("B",arr1);

console.log("perform splice() ");

const myNum2= arr1.splice(1,3);  // it will modify the origianl array includes only start till end (including end )also 

console.log(myNum2);
console.log("after splice ", arr1);