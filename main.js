const num1= document.getElementById('num1')
const num2= document.getElementById('num2')
const operando= document.getElementById('operandor')
const display=document.getElementById('pantalla')

const botones=document.querySelector('.inferior')

botones.addEventListener('click',(e)=>{
    if(e.target.id=='suma'){
        operando.textContent="+"
    }if(e.target.id=='rest'){
        operando.textContent="-"
    }if(e.target.id=='mult'){
        operando.textContent="*"
    }if(e.target.id=='divi'){
        operando.textContent="/"
    }
    
    else if(e.target.id=='igual'){
        if(operando.textContent=="+"){
            display.textContent=+num1.value + +num2.value
        }
        else if(operando.textContent=="-"){
            display.textContent= +num1.value - +num2.value
        }
        else if(operando.textContent=="*"){
            display.textContent= +num1.value * +num2.value
        }
        else if(operando.textContent=="/"){
            display.textContent= +num1.value / +num2.value
        }
    }
    if(e.target.id=='limpiar'){
        operando.textContent=""
        display.textContent=""
        num1.value=""
        num2.value=""
    }
})