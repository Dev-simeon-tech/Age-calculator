// output text
const daytx = document.querySelector('.dd')
const yeartx = document.querySelector('.yy')
const monthtx = document.querySelector('.mm')

// input element
const dayInp = document.getElementById("day")
const yearInp = document.getElementById("year")
const monthInp = document.getElementById("month")
const formInp = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    dateValidation();
    if(dateValidation() === true){
        ageCalculate();
    }
})
const setPass = (element)=>{
    const inputBox = element.parentElement;
    const errorMsg = inputBox.querySelector('.error-msg')
    errorMsg.innerText = '';
    const input = inputBox.querySelector('.input')
    input.style.border = '1px solid hsl(0, 0%, 86%)';
    const label = inputBox.querySelector('.label')
    label.style.color = 'hsl(0, 1%, 44%)'
   
    
}

const setError = (element,message)=>{
    const inputBox = element.parentElement;
    const errorMsg = inputBox.querySelector('.error-msg')
    errorMsg.innerText = message
    const input = inputBox.querySelector('.input')
    input.style.border = '1px solid hsl(0, 100%, 67%)';
    const label = inputBox.querySelector('.label')
    label.style.color = 'hsl(0, 100%, 67%)'
    
}
const dateValidation = ()=>{
    // validation for day
    const letters = /^[a-zA-Z]*$/
    const presentYear = new Date().getFullYear();
    let validator = true;
    if(dayInp.value === ''){
        setError(dayInp,'This field is required')
        validator = false
    }
    else if(dayInp.value.match(letters)){
        setError(dayInp,'Must be a Date')
        validator = false

    }
    else if(dayInp.value < 1 || dayInp.value > 31){
        setError(dayInp,'Must be a Date')
        validator = false
    }

    else{
        setPass(dayInp)
        validator = true

    }
    // validation for year
    if(yearInp.value === ''){
        setError(yearInp,'This field is required')
        validator = false
    }
    else if(yearInp.value.match(letters)){
        setError(yearInp,'Must be a Month')
        validator = false

    }
    else if(yearInp.value.length != 4 ){
        setError(yearInp,'Must be 4 digits')
        validator = false

    }
    
    else if(yearInp.value > presentYear ){
        setError(yearInp,'Must be in the past')
        validator = false

    }
    else{
        setPass(yearInp)
        // validator = true

    }
    // validation for month
    if(monthInp.value === ''){
        setError(monthInp,'This field is required')
        validator = false

    }
    else if(monthInp.value.match(letters)){
        setError(monthInp,'Must be a Year')
        validator = false

    }
    else if(monthInp.value > 12 || monthInp.value < 1){
        setError(monthInp,"Must be a valid month")
        validator = false

    }
    else{
        setPass(monthInp)
        // validator = true    
    }

    return validator;
}

const date = new Date();
let day = date.getDay();
let month =1 + date.getMonth()
let year = date.getFullYear();
const months = [31,28,31,30,31,30,31,31,30,31,30,31]


const ageCalculate = ()=>{
    if(dayInp.value > day){
        day = day + months[month - 1] 
        month-= 1;

    }
    
    if(monthInp.value > month){
        month+= 12;
        year-= 1
    }
    const d = day - dayInp.value
    const m = month - monthInp.value
    const y =  year - yearInp.value

    daytx.innerHTML = d;
    monthtx.innerHTML = m;
    yeartx.innerHTML = y;
    
    
}

