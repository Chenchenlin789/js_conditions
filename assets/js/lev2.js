//John ist 170 cm groß und 22 Jahre alt, Meike ist 168 cm groß und 34 Jahre alt.

// lev2_1
let john= 22*5+170
let meike = 34*5+168

 function game() {
     console.log("test")
     console.log(john)
     console.log(meike)
    if (john > meike){
        document.getElementById('result1').innerHTML="john wins"
    } else if (john == meike){
        document.getElementById('result1').innerHTML="draw"
    } else if (john < meike){
        document.getElementById('result1').innerHTML="meike wins"
    }
}

// lev2_3
function difference() {
    let number= document.getElementById('nummer').value
    if (number - 27 >= 27){
        console.log((number-27)*2)
        document.getElementById('result2').innerHTML=(number-27)*2;
    } else {
        document.getElementById('result2').innerHTML=number-27
    }
}

//lev2_4
//Schreibe eine Funktion mit zwei Parametern (Zahlen).
// Sie soll die Summe dieser Zahlen berechnen.
// Wenn beide Parameter gleich sind, soll sie die (Summe * 5) ausgeben.

function result3(x, y) {
    x = parseInt(document.getElementById("number1").value)
    
    y = parseInt(document.getElementById("number2").value)

    console.log(typeof((x)));
    console.log(typeof((y)));
    
    if(x==y) {
        document.getElementById('result3').innerHTML=(x+y)*5
    } else if (x>y) {
        document.getElementById('result3').innerHTML=x+y
      
    } else if (x<y) {
         document.getElementById('result3').innerHTML=x+y }
}


