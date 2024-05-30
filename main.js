//Start of toast for index.html
document.getElementById("toastbtn").onclick = function() {
  
  var nameInput = document.getElementById("name")
  var emailInput = document.getElementById("email")
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if(nameInput.value == "") {
    alert("Name must be filled out")
  }

  else if(emailInput.value == "") {
    alert("Email must be filled out")
  }

  else if(emailInput.value.match(validRegex)) {
    var myAlert =document.getElementById('liveToast');
    var bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
  } 

  else{
    alert("Invalid email address!")
  }
}
//End of toast for index.html

//Start of checkout for cart.html

//Object
var cart = {
  cupcakeone: 0,
  cupcaketwo: 0,
  cupcakethree: 0,
  cupcakefour: 0,
  cupcakefive: 0,
  cupcakesix: 0,
  cupcakeseven: 0,
  cupcakeeight: 0,
  
  cookieone: 0,
  cookietwo: 0,
  cookiethree: 0,
  cookiefour: 0,
  cookiefive: 0,
  cookiesix: 0,
  cookieseven: 0,
  cookieeight: 0,

  cakeeone: 0,
  caketwo: 0,
  cakethree: 0,
  cakefour: 0,
  cakefive: 0,
  cakesix: 0,
  cakeseven: 0,
  cakeeight: 0,

}

function cupcakeoneSubmit(){
  let newValue = document.getElementById("cupcakeone").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cupcakeoneamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakeonecost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cupcaketwoSubmit(){
  let newValue = document.getElementById("cupcaketwo").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cupcaketwoamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcaketwocost")
    newCost.innerHTML = (newValue * 3.50)
  }
}

function cupcakethreeSubmit(){
  let newValue = document.getElementById("cupcakethree").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cupcakethreeamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakethreecost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cupcakefourSubmit(){
  let newValue = document.getElementById("cupcakefour").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cupcakefouramount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakefourcost")
    newCost.innerHTML = (newValue * 3.00)
  }
}

function cupcakefiveSubmit(){
  let newValue = document.getElementById("cupcakefive").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cupcakefiveamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakefivecost")
    newCost.innerHTML = (newValue * 4.00)
  }
}

function cupcakesixSubmit(){
  let newValue = document.getElementById("cupcakesix").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cupcakesixamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakesixcost")
    newCost.innerHTML = (newValue * 3.75)
  }
}

function cupcakesevenSubmit(){
  let newValue = document.getElementById("cupcakeseven").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cupcakesevenamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakesevencost")
    newCost.innerHTML = (newValue * 4.00)
  }
}

function cupcakeeightSubmit(){
  let newValue = document.getElementById("cupcakeeight").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cupcakeeightamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakeeightcost")
    newCost.innerHTML = (newValue * 4.00)
  }
}

function cookieoneSubmit(){
  let newValue = document.getElementById("cookieone").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cookieoneamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookieonecost")
    newCost.innerHTML = (newValue * 2.25)
  }
}

function cookietwoSubmit(){
  let newValue = document.getElementById("cookietwo").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cookietwoamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookietwocost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cookiethreeSubmit(){
  let newValue = document.getElementById("cookiethree").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cookiethreeamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiethreecost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cookiefourSubmit(){
  let newValue = document.getElementById("cookiefour").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cookiefouramount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiefourcost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cookiefiveSubmit(){
  let newValue = document.getElementById("cookiefive").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cookiefiveamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiefivecost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cookiesixSubmit(){
  let newValue = document.getElementById("cookiesix").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cookiesixamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiesixcost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cookiesevenSubmit(){
  let newValue = document.getElementById("cookieseven").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cookiesevenamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiesevencost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cookieeightSubmit(){
  let newValue = document.getElementById("cookieeight").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cookieeightamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookieeightcost")
    newCost.innerHTML = (newValue * 3.25)
  }
}

function cakeoneSubmit(){
  let newValue = document.getElementById("cakeone").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cakeoneamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakeonecost")
    newCost.innerHTML = (newValue * 45.25)
  }
}

function caketwoSubmit(){
  let newValue = document.getElementById("caketwo").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("caketwoamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("caketwocost")
    newCost.innerHTML = (newValue * 45.25)
  }
}

function cakethreeSubmit(){
  let newValue = document.getElementById("cakethree").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cakethreeamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakethreecost")
    newCost.innerHTML = (newValue * 45.65)
  }
}

function cakefourSubmit(){
  let newValue = document.getElementById("cakefour").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cakefouramount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakefourcost")
    newCost.innerHTML = (newValue * 45.50)
  }
}

function cakefiveSubmit(){
  let newValue = document.getElementById("cakefive").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cakefiveamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakefivecost")
    newCost.innerHTML = (newValue * 45.65)
  }
}

function cakesixSubmit(){
  let newValue = document.getElementById("cakesix").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cakesixamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakesixcost")
    newCost.innerHTML = (newValue * 45.50)
  }
}

function cakesevenSubmit(){
  let newValue = document.getElementById("cakeseven").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cakesevenamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakesevencost")
    newCost.innerHTML = (newValue * 45.65)
  }
}

function cakeeightSubmit(){
  let newValue = document.getElementById("cakeeight").value
  if(newValue < 0){
    alert("Number must be greater than 0.")
  }
  else{
    let newAmount = document.getElementById("cakeeightamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakeeightcost")
    newCost.innerHTML = (newValue * 45.65)
  }
}

//End of checkout for cart.html