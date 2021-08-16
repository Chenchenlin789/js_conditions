// conditions

// 1- if, else if, else 

if(true) {
    console.log("i have done something")
}

if(0=="0") {
    console.log("i have done something2")
}

let time = 9
time =12

if (time ==9) {
    console.log("it's 9")
}

else if (time == 10) {
    console.log("it's 10")
}

else if (time == 11) {
    console.log("it's 11")
}
else {
    console.log("who cares")
}

// And and Or
console.log(true && true) //true 
console.log(true && false) // false
console.log((3=='3') && (1==true)) // true 

// Morgen, Tag, Abends, Nachts
// Morgen: 6-10uhr
// Tag: 10-17uhr
// Abends: 17-20uhr
// Nachts: >20

time = 6

function greeting(time){
if (time >6 && time < 10) {
    console.log ("Good Morning")
}
else if (time > 10 && time < 17) {
    console.log ("Good Afternoon")
}
else if (time > 17 && time < 20) {
    console.log ("Good Evening")
}
else if (time >= 20) {
    console.log ("Good Night")
}
}

greeting(12)
greeting(8)

//input => text/ Number
//input:button => change background
// 1-18 => body: background tomato
// <18 => body: background gold

function changeBg() {
    console.log('test')
    let age=document.getElementById('age').value
    console.log(age)
    if (age>18) {
        document.body.style.background="gold"
    }
    else {
        document.body.style.background="tomato"
    }
}

//ternary Operators
//condition? condition true : condition false : condition
time = 19
time < 18 ? console.log('tag'): console.log('abend')
time < 18 ? console.log('tag'): null

//or
if (time< 18){
    console.log('tag')
} else {
    console.log ('abend')
}

// überprüfe die Nummer des Benutzers
//Output
//"fizz" bei Vielfachen von 3,
// "buzz" bei vielfachen von 5
//"fizzbuzz" bei Vielfachen von 3 und 5
// andernfalls die Zahl

// input user= 12 => "fizz"
// input user= 20 => "buzz"
// input user= 30 => "fizzbuzz"
// input user= 17 => 17


function checkNumber(){
let number= document.getElementById('number').value
let output1=number%3 ==0 // true oder false
let output2=number%5 ==0 // true oder false

if (output1 && output1) {
    console.log("fizzbuzz")
}else if (output1){
    console.log("fizz")
}else if (output2){
    console.log("buzz")
} else {
    console.log(number)
}
// output1 ? console.log('fizz2') : console.log(number)
// output2 ? console.log('buzz') : console.log(number)
// Einzeiler
output2 ? (output1 ? console.log('fizzbuzz') : console.log('fizz2')) : output2 ? console.log('buz2z') : number
}


// function checkNumber(){
//      console.log ("test2")
//      let number= document.getElementById('number').value
//      console.log ("number")
    
//      //syntax
//     if (number %3 == 0 && number % 5 == 0){
//             console.log("fizzbuzz")
//     }
//     else if (number %3 == 0) {
//             console.log ("fizz")
//     }else if (number%5 == 0){
//             console.log ('buzz')
//     } else {
//             console.log(number)
//     }
// }



