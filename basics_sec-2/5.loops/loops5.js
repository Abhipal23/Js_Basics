// reduce in js 


// reduce() method creates a user-supply " reducer" call back fun on each elelemt of array 


const array1= [1,2,3,4];

// const intialVal =0;

// const sumWithIntial =array1.reduce((previousValue,currentValue,currentIndex,array1)=>{
//          // here previous value ==intial value at very first time 
//          // then prevVlaue =prv+currentval
//          //currentIndex,array1 -optional parameter
// })

// 1/3
// reduce(callbackfn:
//      (previousValue: number, currentValue: number,
//          currentIndex: number, array: number[]) => number): 
//          number





const res1= array1.reduce((acc,currentVal)=>(acc +currentVal),0)

// 0 is is the value where acc will start 

// console.log(res1);



const shoppingCart =[
    {
        itemName:"js couree",
        price:2999
    },
    {
        itemName:"dsa",
        price:3999
    },
    {
        itemName:"mobile dev",
        price:5999
    },
    {
        itemName:"Data Science",
        price:7999
    }
]


// i need all to add all items's price in which is in shopping cart 

let res = shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(res); // 20996