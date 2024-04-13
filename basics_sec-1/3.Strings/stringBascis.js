
// string declaration 

//1   
   const name ="abhishek"

// 2: 
   const gameName= new String('abhishek pal');
 // it will return an object of string and with index:value pair   0:"a",....
   


const repoCount =50

//console.log(name+" "+repoCount);  // not recomendded 


// #### string interpolation  


//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// lets se some method with string obj 

// console.log(gameName[0]);   // a
// console.log(gameName.length); // 12

// console.log(gameName.__proto__); // it contain all methid and which is avialbale 

// console.log(gameName.toUpperCase());  // ABHISHEK PAL :it won't change the original string as stack store in stack memeo

// console.log(gameName.charAt(2))     // h --it takes number as input give char at that index
// console.log(gameName.indexOf('a'));   // retunr index at which this char is present 
//

const newSt= gameName.substring(0,4);// give substring start from 0 to 4 not 4 (0...3)
// negative value not allowed
//console.log(newSt);

const anotherString = gameName.slice(0,4);
//console.log(anotherString)  // here we can take -ve value also


const st = "      hiii     ";
//console.log(st.trim());   // remove starting and ending space from string 


const url ="https://abhishek.com/%20pal"// broweser does't understand space it will convert spaces into %20


//console.log(url.replace('%20','_'));  // https://abhishek.com/_pal 

console.log(url.includes('abhis')); // true

// split()  and join() important method


const name1="abhishek pal kuamr";

console.log(name1.split(' ')) // [ 'abhishek', 'pal', 'kuamr' ]