const form = document.querySelector('form')

// as we are not sending our form and form is two type either we get or post 
// so need to stop sneding to server 

// for this we need to add eventListner

form.addEventListener('submit',function(e){
    // prevent default
    e.preventDefault();

    // get the value form input field 

    const height =parseInt(document.querySelector('#Height').value)
    const weight =  parseInt(document.querySelector('#weight').value)
     // console.log(height);
    // if we write these height and weight outside of this function then as soos as page 
    // will lode some default value will be loaded and that we don't want 

   const res = (document.querySelector('#result'))
 
   // lets apply some checks 
   if(height===''||height<0 || isNaN(height)){
      res.innerHTML=`Please enter valid Height ${height}`
   }
  else if(weight===''||weight<0 || isNaN(weight)){
    res.innerHTML=`Please enter valid weight ${weight}`
 }
 else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)

    //show result 

    if(bmi<18.6){
        res.innerHTML=`<span>Hi dear,Your BMI IS ${bmi},☹️you are under Weight</span>`;
    }
  // res.innerHTML=`<span>${bmi} </span>`;
    // it is good practice to wirte in the span and using backticks

   else if(bmi>18.6 && bmi<24.9){
        res.innerHTML=`<span>Hi dear,Your BMI IS ${bmi},😁you Weight is normal</span>`;
    }
    else{
        res.innerHTML=`<span>Hi dear,Your BMI IS ${bmi},☹️you are over  Weight</span>`;
    }
 }
 
})