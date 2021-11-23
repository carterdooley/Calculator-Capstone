//Number Button Functionality

let input = document.getElementById('int')

const displayNum1 = () => {
    return input.value +=1
}
const displayNum2 = () => {
    return input.value +=2
}
const displayNum3 = () => {
    return input.value +=3
}
const displayNum4 = () => {
    return input.value +=4
}
const displayNum5 = () => {
    return input.value +=5
}
const displayNum6 = () => {
    return input.value +=6
}
const displayNum7 = () => {
    return input.value +=7
}
const displayNum8 = () => {
    return input.value +=8
}
const displayNum9 = () => {
    return input.value +=9
}
const displayNum0 = () => {
    return input.value +=0
}
//Symbol Button Functionality
const displaySymbolPlus = () => {
    return input.value += ' + '
}
const displaySymbolMinus = () => {
    return input.value += ' - '
}
const displaySymbolTimes = () => {
    return input.value += ' x '
}
const displaySymbolDivide = () => {
    return input.value += ' / '
}

const clearCalc = () => {
    return input.value = ''
}
//Solve functionality
const equals = () => {
    let content = input.value
    let newCont = content.split(' ')
        if(newCont.includes('+')){
            let i = newCont.indexOf('+')
            let before = parseInt(newCont[i-1])
            let after = parseInt(newCont[i+1])
            return input.value = before + after
        } else if(newCont.includes('-')){
            let i = newCont.indexOf('-')
            let before = parseInt(newCont[i-1])
            let after = parseInt(newCont[i+1])
            return input.value = before - after
        } else if(newCont.includes('x')){
            let i = newCont.indexOf('x')
            let before = parseInt(newCont[i-1])
            let after = parseInt(newCont[i+1])
            return input.value = before * after
        }  else if(newCont.includes('/')){
            let i = newCont.indexOf('/')
            let before = parseInt(newCont[i-1])
            let after = parseInt(newCont[i+1])
            return input.value = before/after
        }
    }

//Order of Operations




//Event Listeners
    //Numbers
document.getElementById("1").addEventListener("click", displayNum1)
document.getElementById('2').addEventListener('click', displayNum2)
document.getElementById('3').addEventListener('click', displayNum3)
document.getElementById('4').addEventListener('click', displayNum4)
document.getElementById('5').addEventListener('click', displayNum5)
document.getElementById('6').addEventListener('click', displayNum6)
document.getElementById('7').addEventListener('click', displayNum7)
document.getElementById('8').addEventListener('click', displayNum8)
document.getElementById('9').addEventListener('click', displayNum9)
document.getElementById('0').addEventListener('click', displayNum0)

    //Operations
document.getElementById('+').addEventListener('click', displaySymbolPlus)
document.getElementById('-').addEventListener('click', displaySymbolMinus)
document.getElementById('x').addEventListener('click', displaySymbolTimes)
document.getElementById('/').addEventListener('click', displaySymbolDivide)
document.getElementById('=').addEventListener('click', equals)
document.getElementById('clear').addEventListener('click', clearCalc)