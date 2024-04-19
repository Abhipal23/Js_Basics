const clock= document.getElementById('clock')
// we can also use querySelector also

//document.querySelector('#clock')



setInterval(function(){
    let date = new Date()

// console.log(date.toLocaleTimeString());

clock.innerHTML=date.toLocaleTimeString();

},1000)
/* it takes 2 things as param
1.function
2.time in milisec :it will reExecuting function after given time in milisec
*/
