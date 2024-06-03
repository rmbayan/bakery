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

/// Local Storage Object
var cupcakeoneSave = localStorage.getItem("cupcakeone");
var cupcaketwoSave = localStorage.getItem("cupcaketwo");
var cupcakethreeSave = localStorage.getItem("cupcakethree");
var cupcakefourSave = localStorage.getItem("cupcakefour");
var cupcakefiveSave = localStorage.getItem("cupcakefive");
var cupcakesixSave = localStorage.getItem("cupcakesix");
var cupcakesevenSave = localStorage.getItem("cupcakeseven");
var cupcakeeightSave = localStorage.getItem("cupcakeeight");

var cookieoneSave = localStorage.getItem("cookieone");
var cookietwoSave = localStorage.getItem("cookietwo");
var cookiethreeSave = localStorage.getItem("cookiethree");
var cookiefourSave = localStorage.getItem("cookiefour");
var cookiefiveSave = localStorage.getItem("cookiefive");
var cookiesixSave = localStorage.getItem("cookiesix");
var cookiesevenSave = localStorage.getItem("cookieseven");
var cookieeightSave = localStorage.getItem("cookieeight");

var cakeoneSave = localStorage.getItem("cakeone");
var caketwoSave = localStorage.getItem("caketwo");
var cakethreeSave = localStorage.getItem("cakethree");
var cakefourSave = localStorage.getItem("cakefour");
var cakefiveSave = localStorage.getItem("cakefive");
var cakesixSave = localStorage.getItem("cakesix");
var cakesevenSave = localStorage.getItem("cakeseven");
var cakeeightSave = localStorage.getItem("cakeeight");

// Overall Purchase Saves Cart
document.getElementById("cupcakeoneamount").innerHTML = cupcakeoneSave || 0
document.getElementById("cupcakeonecost").innerHTML = (cupcakeoneSave * 3.25)
document.getElementById("cupcaketwoamount").innerHTML = cupcaketwoSave || 0
document.getElementById("cupcaketwocost").innerHTML = (cupcaketwoSave * 3.50)
document.getElementById("cupcakethreeamount").innerHTML = cupcakethreeSave || 0
document.getElementById("cupcakethreecost").innerHTML = (cupcakethreeSave * 3.25)
document.getElementById("cupcakefouramount").innerHTML = cupcakefourSave || 0
document.getElementById("cupcakefourcost").innerHTML = (cupcakefourSave * 3.00)
document.getElementById("cupcakefiveamount").innerHTML = cupcakefiveSave || 0
document.getElementById("cupcakefivecost").innerHTML = (cupcakefiveSave * 4.00)
document.getElementById("cupcakesixamount").innerHTML = cupcakesixSave || 0
document.getElementById("cupcakesixcost").innerHTML = (cupcakesixSave * 3.75)
document.getElementById("cupcakesevenamount").innerHTML = cupcakesevenSave || 0
document.getElementById("cupcakesevencost").innerHTML = (cupcakesevenSave * 4.00)
document.getElementById("cupcakeeightamount").innerHTML = cupcakeeightSave || 0
document.getElementById("cupcakeeightcost").innerHTML = (cupcakeeightSave * 4.00)

document.getElementById("cookieoneamount").innerHTML = cookieoneSave || 0
document.getElementById("cookieonecost").innerHTML = (cookieoneSave * 2.25)
document.getElementById("cookietwoamount").innerHTML = cookietwoSave || 0
document.getElementById("cookietwocost").innerHTML = (cookietwoSave * 3.25)
document.getElementById("cookiethreeamount").innerHTML = cookiethreeSave || 0
document.getElementById("cookiethreecost").innerHTML = (cookiethreeSave * 3.25)
document.getElementById("cookiefouramount").innerHTML = cookiefourSave || 0
document.getElementById("cookiefourcost").innerHTML = (cookiefourSave * 3.25)
document.getElementById("cookiefiveamount").innerHTML = cookiefiveSave || 0
document.getElementById("cookiefivecost").innerHTML = (cookiefiveSave * 3.25)
document.getElementById("cookiesixamount").innerHTML = cookiesixSave || 0
document.getElementById("cookiesixcost").innerHTML = (cookiesixSave * 3.25)
document.getElementById("cookiesevenamount").innerHTML = cookiesevenSave || 0
document.getElementById("cookiesevencost").innerHTML = (cookiesevenSave * 3.25)
document.getElementById("cookieeightamount").innerHTML = cookieeightSave || 0
document.getElementById("cookieeightcost").innerHTML = (cookieeightSave * 3.25)

document.getElementById("cakeoneamount").innerHTML = cakeoneSave || 0
document.getElementById("cakeonecost").innerHTML = (cakeoneSave * 45.25)
document.getElementById("caketwoamount").innerHTML = caketwoSave || 0
document.getElementById("caketwocost").innerHTML = (caketwoSave * 45.25)
document.getElementById("cakethreeamount").innerHTML = cakethreeSave || 0
document.getElementById("cakethreecost").innerHTML = (cakethreeSave * 45.65)
document.getElementById("cakefouramount").innerHTML = cakefourSave || 0
document.getElementById("cakefourcost").innerHTML = (cakefourSave * 45.50)
document.getElementById("cakefiveamount").innerHTML = cakefiveSave || 0
document.getElementById("cakefivecost").innerHTML = (cakefiveSave * 45.65)
document.getElementById("cakesixamount").innerHTML = cakesixSave || 0
document.getElementById("cakesixcost").innerHTML = (cakesixSave * 45.50)
document.getElementById("cakesevenamount").innerHTML = cakesevenSave || 0
document.getElementById("cakesevencost").innerHTML = (cakesevenSave * 45.65)
document.getElementById("cakeeightamount").innerHTML = cakeeightSave || 0
document.getElementById("cakeeightcost").innerHTML = (cakeeightSave * 45.65)

//Functions
function receipt(){
  let button = document.getElementById("receiptButton")
  button.disabled = true
  let div = document.getElementById("receipt")
  let h = document.createElement("h3")
  h.innerHTML = "Order Summary"
  div.append(h)
  
  let cupcakeh = document.createElement("h4")
  cupcakeh.innerHTML = "Cupcakes"
  div.append(cupcakeh)
  if((cupcakeoneSave <= 0) && (cupcaketwoSave <= 0) && (cupcakethreeSave <= 0) && (cupcakefourSave <= 0) && (cupcakefiveSave <= 0) && (cupcakesixSave <= 0) && (cupcakesevenSave <= 0) && (cupcakeeightSave <= 0)){
    let p = document.createElement("p")
    p.innerHTML = "none"
    div.append(p);
  }
  if(cupcakeoneSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cupcakeoneSave + " Oreo for $" + (cupcakeoneSave * 3.25)
    div.append(p);
  }
  if(cupcaketwoSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cupcaketwoSave + " Chocolate Raspberry for $" + (cupcaketwoSave * 3.50)
    div.append(p);
  }
  if(cupcakethreeSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cupcakethreeSave + " Lemon Raspberry for $" + (cupcakethreeSave * 3.25)
    div.append(p);
  }
  if(cupcakefourSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cupcakefourSave + " White Almond for $" + (cupcakefourSave * 3.00)
    div.append(p);
  }
  if(cupcakefiveSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cupcakefourSave + " Chocolate Candy for $" + (cupcakefiveSave * 4.00)
    div.append(p);
  }
  if(cupcakesixSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cupcakesixSave + " Hot Cocoa for $" + (cupcakesixSave * 3.75)
    div.append(p);
  }
  if(cupcakesevenSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cupcakesevenSave + " Blueberry for $" + (cupcakesevenSave * 4.00)
    div.append(p);
  }
  if(cupcakeeightSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cupcakeeightSave + " Apple Crisp for $" + (cupcakeeightSave * 4.00)
    div.append(p);
  }

  let cookieh = document.createElement("h4")
  cookieh.innerHTML = "Cookies"
  div.append(cookieh)
  if((cookieoneSave <= 0) && (cookietwoSave <= 0) && (cookiethreeSave <= 0) && (cookiefourSave <= 0) && (cookiefiveSave <= 0) && (cookiesixSave <= 0) && (cookiesevenSave <= 0) && (cookieeightSave <= 0)){
    let p = document.createElement("p")
    p.innerHTML = "none"
    div.append(p);
  }
  if(cookieoneSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cookieoneSave + " Sugar Cookie Icing for $" + (cookieoneSave * 2.25)
    div.append(p);
  }
  if(cookietwoSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cookietwoSave + " Oreo Chocolate Chip for $" + (cookietwoSave * 3.25)
    div.append(p);
  }
  if(cookiethreeSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cookiethreeSave + " Brownie for $" + (cookiethreeSave * 3.25)
    div.append(p);
  }
  if(cookiefourSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cookiefourSave + " Caramel Chocolate Chip Pretzel for $" + (cookiefourSave * 3.25)
    div.append(p);
  }
  if(cookiefiveSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cookiefiveSave + " Toffee Chocolate Chip for $" + (cookiefiveSave * 3.25)
    div.append(p);
  }
  if(cookiesixSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cookiesixSave + " Chocolate Chip for $" + (cookiesixSave * 3.25)
    div.append(p);
  }
  if(cookiesevenSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cookiesevenSave + " Chocolate Crinkle for $" + (cookiesevenSave * 3.25)
    div.append(p);
  }
  if(cookieeightSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cookieeightSave + " Sugar Cookie for $" + (cookieeightSave * 3.25)
    div.append(p);
  }

  let cakeh = document.createElement("h4")
  cakeh.innerHTML = "Cakes"
  div.append(cakeh)
  if((cakeoneSave <= 0) && (caketwoSave <= 0) && (cakethreeSave <= 0) && (cakefourSave <= 0) && (cakefiveSave <= 0) && (cakesixSave <= 0) && (cakesevenSave <= 0) && (cakeeightSave <= 0)){
    let p = document.createElement("p")
    p.innerHTML = "none"
    div.append(p);
  }
  if(cakeoneSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cakeoneSave + " Lemon for $" + (cakeoneSave * 45.25)
    div.append(p);
  }
  if(caketwoSave > 0){
    let p = document.createElement("p")
    p.innerHTML = caketwoSave + " Red Velvet for $" + (caketwoSave * 45.25)
    div.append(p);
  }
  if(cakethreeSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cakethreeSave + " Cookies and Cream for $" + (cakethreeSave * 45.65)
    div.append(p);
  }
  if(cakefourSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cakefourSave + " Chocolate for $" + (cakefourSave * 45.50)
    div.append(p);
  }
  if(cakefiveSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cakefiveSave + " Chocolate Mocha for $" + (cakefiveSave * 45.65)
    div.append(p);
  }
  if(cakesixSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cakesixSave + " Cranberry Orange for $" + (cakesixSave * 45.50)
    div.append(p);
  }
  if(cakesevenSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cakesevenSave + " Pumpkin Spice for $" + (cakesevenSave * 45.65)
    div.append(p);
  }
  if(cakeeightSave > 0){
    let p = document.createElement("p")
    p.innerHTML = cakeeightSave + " Black Forest for $" + (cakeeightSave * 45.65)
    div.append(p);
  }
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

    var cupcakeone = cart.cupcakeone
    cupcakeone = newValue
    localStorage.setItem("cupcakeone", cupcakeone)
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

    var cupcaketwo = cart.cupcaketwo
    cupcaketwo = newValue
    localStorage.setItem("cupcaketwo", cupcaketwo)
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

    var cupcakethree = cart.cupcakethree
    cupcakethree = newValue
    localStorage.setItem("cupcakethree", cupcakethree)
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

    var cupcakefour = cart.cupcakefour
    cupcakefour = newValue
    localStorage.setItem("cupcakefour", cupcakefour)
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

    var cupcakefive = cart.cupcakefive
    cupcakefive = newValue
    localStorage.setItem("cupcakefive", cupcakefive)
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

    var cupcakesix = cart.cupcakesix
    cupcakesix = newValue
    localStorage.setItem("cupcakesix", cupcakesix)
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

    var cupcakeseven = cart.cupcakeseven
    cupcakeseven = newValue
    localStorage.setItem("cupcakeseven", cupcakeseven)
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

    var cupcakeeight = cart.cupcakeeight
    cupcakeeight = newValue
    localStorage.setItem("cupcakeeight", cupcakeeight)
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

    var cookieone = cart.cookieone
    cookieone = newValue
    localStorage.setItem("cookieone", cookieone)
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

    var cookietwo = cart.cookietwo
    cookietwo = newValue
    localStorage.setItem("cookietwo", cookietwo)
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

    var cookiethree = cart.cookiethree
    cookiethree = newValue
    localStorage.setItem("cookiethree", cookiethree)
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

    var cookiefour = cart.cookiefour
    cookiefour = newValue
    localStorage.setItem("cookiefour", cookiefour)
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

    var cookiefive = cart.cookiefive
    cookiefive = newValue
    localStorage.setItem("cookiefive", cookiefive)
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

    var cookiesix = cart.cookiesix
    cookiesix = newValue
    localStorage.setItem("cookiesix", cookiesix)
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

    var cookieseven = cart.cookieseven
    cookieseven = newValue
    localStorage.setItem("cookieseven", cookieseven)
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

    var cookieeight = cart.cookieeight
    cookieeight = newValue
    localStorage.setItem("cookieeight", cookieeight)
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

    var cakeone = cart.cakeone
    cakeone = newValue
    localStorage.setItem("cakeone", cakeone)
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

    var caketwo = cart.caketwo
    caketwo = newValue
    localStorage.setItem("caketwo", caketwo)
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

    var cakethree = cart.cakethree
    cakethree = newValue
    localStorage.setItem("cakethree", cakethree)
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

    var cakefour = cart.cakefour
    cakefour = newValue
    localStorage.setItem("cakefour", cakefour)
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

    var cakefive = cart.cakefive
    cakefive = newValue
    localStorage.setItem("cakefive", cakefive)
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

    var cakesix = cart.cakesix
    cakesix = newValue
    localStorage.setItem("cakesix", cakesix)
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

    var cakeseven = cart.cakeseven
    cakeseven = newValue
    localStorage.setItem("cakeseven", cakeseven)
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

    var cakeeight = cart.cakeeight
    cakeeight = newValue
    localStorage.setItem("cakeeight", cakeeight)
  }
}

//End of checkout for cart.html