
// filter 
const coding = ["js","ruby","scala","swift"]

// // lets see what this forEach loop is retunring 
//    const value= coding.forEach((item)=>{
//     console.log(item);
// })

// it return undifined , forEach won't return any thing  so if we see it will be undifinde 

// console.log(value);   // 



// suppose i need to return a spacfic value 

const myNum =[1,2,3,23,56,8,9,10]


//filter()->also take call back func and it will return values

// let values= myNum.filter( (num)=>(num>4))
// console.log(values);

// same using forEach 
// const newNum= []
// myNum.forEach((val)=>{
//      if(val>3) newNum.push(val)
// })

// console.log(newNum);



const res =[
    {
        languageName:"JavaScript",
        languageFile:".js",
        year:"2000"
    },
    {
        languageName:"Python",
        languageFile:".py",
        year:"2004"

    },
    {
    languageName:"Java",
    languageFile:".java",
    year:"1998"
    }
]

// i wnated to apply some filter over this data 

    const res1=res.filter(  (val)=>val.year>"1999"
   )

   console.log(res1);



