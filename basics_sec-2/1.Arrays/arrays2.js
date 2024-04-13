const marvelHeroes=["thor","ironman","spiderMan"]

const dcHeroes=["superman","flash","batman"]


// marvelHeroes.push(dcHeroes);  // we pushes another array as a single elemet 
// console.log(marvelHeroes)   // [ 'thor', 'ironman', 'spiderMan', [ 'superman', 'flash', 'batman' ] ]

// another way to merge them  is concat 

const heros = marvelHeroes.concat(dcHeroes);  // concat will  combine two arrays and retunr new array 
// console.log(marvelHeroes)  // [ 'thor', 'ironman', 'spiderMan' ]
// console.log(heros)    //   [ 'thor', 'ironman', 'spiderMan', 'superman', 'flash', 'batman' ]


// another way to merge 
// ... spred op: kanch ka glass usko niche fek de spred ho jyega pura
const allNewHeroies = [...dcHeroes,...marvelHeroes]
// here no limitation of adding as concat have limit of adding two array only but here is not sam e

// console.log(allNewHeroies)




// const anotherArray=[1,2,3,[4,5,6],7,[6,8,[9,10]]]

// const myRealAnotherArray = anotherArray.flat(Infinity)
// // return a new array with all sub-array concatined into it recusively up to specified depth 
// console.log(myRealAnotherArray) // [1, 2, 3, 4, 5, 6, 7, 6, 8, 9,10]



// while selecting data usually it comes in a differnt format  there we need to array as we can loop in array 

// we can askke and convert it 

//console.log(Array.isArray("abhishek"))  // false as it is not array 

// lets convert it 
// console.log(Array.from("abhishek"))  //[ 'a', 'b', 'h', 'i', 's', 'h', 'e', 'k' ]
console.log(Array.from({name:"abhishek"})); // intresting  []
// as we need to specfiy that whoose array should be made keys/values ?



// if we have multiple varaible and we need to convert it into array

let score1=100
let score2=200
let score3=300


console.log(Array.of(score1,score2,score3));
// Returns a new array from a set of elements.

//@param items — A set of elements to include in the new array object