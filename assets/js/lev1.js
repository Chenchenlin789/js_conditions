//Lev1.1
function adult() {
  let alter=document.getElementById("alter").value
  if (alter >= 18) {
      console.log('volljährig')
  } else {
  console.log('minderjährig')
  }
}

//Lev1.3
function greaterThan() {
    event.preventDefault()
    let age =document.getElementById("input").value
    if (age < 18){
        document.getElementById('result').innerHTML='Nein, Du darfst keine Shisha rauchen'
    } else {
        document.getElementById('result').innerHTML='Ja. Du kannst Shisha rauchen'
    }

}