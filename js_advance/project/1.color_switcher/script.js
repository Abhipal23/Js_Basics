const button=document.querySelectorAll('.button')
// it give node list 

const body = document.querySelector('body')


// events are basiclly mouse click on page

button.forEach((button)=>{
     // we will apply event listener for each and every button 
     // eventlistner is listner who listn events

     button.addEventListener('click',function(event){
               // console.log(event)   // mouse event 
              //  console.log(event.target) // html span event : basically tells form which target this event occurs
          if(event.target.id ==='grey'){
              body.style.backgroundColor=event.target.id

          }
          if(event.target.id ==='blue'){
            body.style.backgroundColor=event.target.id

        }
        if(event.target.id ==='white'){
            body.style.backgroundColor=event.target.id

        }
        if(event.target.id ==='yellow'){
            body.style.backgroundColor=event.target.id

        }
          
     })
})