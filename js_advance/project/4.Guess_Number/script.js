// first generete a random number between 1 to 100

let  rand = parseInt(Math.random()*100+1)

// all selectors 

const subBtn= document.querySelector('#subt')
const userInput= document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses') // here i wanted display prev value
const remaing= document.querySelector('.lastResult')

const lowHigh= document.querySelector('.lowOrHi')

const startOver= document.querySelector('.resultParas')

const p = document.createElement('p')  // used as end game button 

let prevGuess =[]
let numGuess=1
let playGame=true // used to allow play game 



if(playGame){
    subBtn.addEventListener('click',function(event){
        // as it is a form  so, we need to prevent our submission on server 

        event.preventDefault()
          const guess = parseInt(userInput.value)
          validateGuess(guess)
    })
}

function validateGuess(guess){
    // first validate value 

    if(isNaN(guess)){
        alert('please enter a valid number ')
    } else if(guess<1){
        alert('please enter a valid number more than 1')
    }else if(guess>100){
        alert('please enter a valid number less than 100')
    }
    else{
        // push number in array 
        prevGuess.push(guess)
        // check attempt number 
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`GAME OVER Random Number was ${rand}`)
            endGame()
        }
        else{
            displayGuess(guess)
            // check our guess
            checkGuess(guess)
        }
    }

   
    
}
function checkGuess(guess){
    // low or high our guess 
    if(guess===rand){
        displayMessage(`your guess is right !`)
        endGame()
    }
    if(guess< rand){
        displayMessage(`Number is too low`)
    }
    if(guess> rand){
        displayMessage(`Number is too high`)
    }

    
}
function displayGuess(guess){
     //1  clear user input value
          userInput.value=''

    //2  add guess in innerhtml

     guessSlot.innerHTML +=`${guess}  `


    //3 increment  the guess count 
        numGuess++;
        remaing.innerHTML =`${11-numGuess}`
}
function displayMessage (message){
      // we print message 
      lowHigh.innerHTML=`<h2> ${message}`
}


// now i wanted end game and start a new game 
function newGame(){
   const newGamebtn= document.querySelector('#newGame')

   newGamebtn.addEventListener('click',function(event){
           //1 reset all variables 
             rand = parseInt(Math.random()*100+1)
             prevGuess=[]
             numGuess=1
             guessSlot.innerHTML=''
             remaing.innerHTML =`${11-numGuess}`
             userInput.removeAttribute('disabled')
             startOver.removeChild(p)

           // set true 
           playGame=true

   })
   
}

function endGame(){
     // clear all input filed
     userInput.value=''

     // stop userInput
     userInput.setAttribute('disabled','') // key value pair
 
     p.classList.add('button')
     p.innerHTML=`<h2 id='newGame'>Start new Game</h2>`
     startOver.appendChild(p)
     playGame=false
     newGame()


}



