// for-of loop

// basic syntax
// for (const iterator of object) {
    

   // note : here object is any itrable ds -array,map, ...
// }

const arr =[1,2,3,4,5,95,87];

// for(const it of arr){
//     console.log(it);
// }
const greeting ="Hello world!"

// for(const it of greeting){
//     console.log(it);
// }

// maps in js 

const newMap =new Map()
newMap.set('In',"india")
newMap.set('pak',"pakistan")
newMap.set('usa',"america")

// map will contain unique key and if we are keeping same key and updating value then 
// in map value will be modified


// itrate in loop

// for(const key of newMap){
//     console.log(key);
// }


// destrucre thi s
// for(const [key,value] of newMap){
//          console.log(`${key}  ${value}`);
//      }

 
     
const myGame={
    game1:"nfs",
    game2:"gta",
    game3:"spiderman"
}

// for (const [obj,val] of myGame) {
//       console.log(obj," ",val);
    
// }

// TypeError: myGame is not iterable
// so for -of loop is not applicable for objects

// for object we can use for-in loop

// for (const key in myGame) {
//     console.log(`${key} are ${myGame[key]}`);
// }


// for(const key  in arr){
//       console.log(arr[key]);  // key will be index 

      
// }



/////for-each loop ////////////////////



// it is higer order function 
// it takes a call back function
// call back fucntion: 1 function without name 
// as we apply this fun on array we need to pass agruments we need pass argumet 
// we use an itrerator instend of that 
// arr.forEach( function (item){
//     console.log(item);
// }  )



// we can apply arrow func

// arr.forEach((val)=>{
//    console.log(val);
// }

// )

// function printMe(item){
//     console.log(item);
// }
// // we can pass reference of that function as call back also 
// arr.forEach(printMe)



// arr.forEach(  (item,index,arr)=>{
//     // it comes with 3 val 
//     // 
//     console.log(`${item} lies on index ${index}`);

// })


// when we perform data base operation
const res =[
    {
        languageName:"JavaScript",
        languageFile:".js",
        year:"2000"
    },
    {
        languageName:"Python",
        languageFile:".py",
        year:2004

    },
    {
    languageName:"Java",
    languageFile:".java",
    year:1998
    }
]

res.forEach( (item)=>{
     // each object is now item 
     console.log(`language Name is ${item.languageName} and its file extension ${item.languageFile}`);
} )