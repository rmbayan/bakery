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

  Rewards15: "true",
}

/// Local Storage Object
var cupcakeoneSave = localStorage.getItem("cupcakeone")
var cupcaketwoSave = localStorage.getItem("cupcaketwo")
var cupcakethreeSave = localStorage.getItem("cupcakethree")
var cupcakefourSave = localStorage.getItem("cupcakefour")
var cupcakefiveSave = localStorage.getItem("cupcakefive")
var cupcakesixSave = localStorage.getItem("cupcakesix")
var cupcakesevenSave = localStorage.getItem("cupcakeseven")
var cupcakeeightSave = localStorage.getItem("cupcakeeight")

var cookieoneSave = localStorage.getItem("cookieone")
var cookietwoSave = localStorage.getItem("cookietwo")
var cookiethreeSave = localStorage.getItem("cookiethree")
var cookiefourSave = localStorage.getItem("cookiefour")
var cookiefiveSave = localStorage.getItem("cookiefive")
var cookiesixSave = localStorage.getItem("cookiesix")
var cookiesevenSave = localStorage.getItem("cookieseven")
var cookieeightSave = localStorage.getItem("cookieeight")

var cakeoneSave = localStorage.getItem("cakeone")
var caketwoSave = localStorage.getItem("caketwo")
var cakethreeSave = localStorage.getItem("cakethree")
var cakefourSave = localStorage.getItem("cakefour")
var cakefiveSave = localStorage.getItem("cakefive")
var cakesixSave = localStorage.getItem("cakesix")
var cakesevenSave = localStorage.getItem("cakeseven")
var cakeeightSave = localStorage.getItem("cakeeight")

var Rewards15Save = localStorage.getItem("Rewards15") || "true"

var allcostSave = localStorage.getItem("allcost") || 0

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
allCost()

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

  let taxh = document.createElement("h4")
  taxh.innerHTML = "Tax: $5"
  div.append(taxh)
}

function cupcakeoneSubmit(){
  let newValue = document.getElementById("cupcakeone").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cupcakeoneamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakeonecost")
    newCost.innerHTML = (newValue * 3.25)

    var cupcakeone = cart.cupcakeone
    cupcakeone = newValue
    localStorage.setItem("cupcakeone", cupcakeone)
    allCost()
  }
}

function cupcaketwoSubmit(){
  let newValue = document.getElementById("cupcaketwo").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cupcaketwoamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcaketwocost")
    newCost.innerHTML = (newValue * 3.50)

    var cupcaketwo = cart.cupcaketwo
    cupcaketwo = newValue
    localStorage.setItem("cupcaketwo", cupcaketwo)
    allCost()
  }
}

function cupcakethreeSubmit(){
  let newValue = document.getElementById("cupcakethree").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cupcakethreeamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakethreecost")
    newCost.innerHTML = (newValue * 3.25)

    var cupcakethree = cart.cupcakethree
    cupcakethree = newValue
    localStorage.setItem("cupcakethree", cupcakethree)
    allCost()
  }
}

function cupcakefourSubmit(){
  let newValue = document.getElementById("cupcakefour").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cupcakefouramount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakefourcost")
    newCost.innerHTML = (newValue * 3.00)

    var cupcakefour = cart.cupcakefour
    cupcakefour = newValue
    localStorage.setItem("cupcakefour", cupcakefour)
    allCost()
  }
}

function cupcakefiveSubmit(){
  let newValue = document.getElementById("cupcakefive").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cupcakefiveamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakefivecost")
    newCost.innerHTML = (newValue * 4.00)

    var cupcakefive = cart.cupcakefive
    cupcakefive = newValue
    localStorage.setItem("cupcakefive", cupcakefive)
    allCost()
  }
}

function cupcakesixSubmit(){
  let newValue = document.getElementById("cupcakesix").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cupcakesixamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakesixcost")
    newCost.innerHTML = (newValue * 3.75)

    var cupcakesix = cart.cupcakesix
    cupcakesix = newValue
    localStorage.setItem("cupcakesix", cupcakesix)
    allCost()
  }
}

function cupcakesevenSubmit(){
  let newValue = document.getElementById("cupcakeseven").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cupcakesevenamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakesevencost")
    newCost.innerHTML = (newValue * 4.00)

    var cupcakeseven = cart.cupcakeseven
    cupcakeseven = newValue
    localStorage.setItem("cupcakeseven", cupcakeseven)
    allCost()
  }
}

function cupcakeeightSubmit(){
  let newValue = document.getElementById("cupcakeeight").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cupcakeeightamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cupcakeeightcost")
    newCost.innerHTML = (newValue * 4.00)

    var cupcakeeight = cart.cupcakeeight
    cupcakeeight = newValue
    localStorage.setItem("cupcakeeight", cupcakeeight)
    allCost()
  }
}

function cookieoneSubmit(){
  let newValue = document.getElementById("cookieone").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cookieoneamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookieonecost")
    newCost.innerHTML = (newValue * 2.25)

    var cookieone = cart.cookieone
    cookieone = newValue
    localStorage.setItem("cookieone", cookieone)
    allCost()
  }
}

function cookietwoSubmit(){
  let newValue = document.getElementById("cookietwo").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cookietwoamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookietwocost")
    newCost.innerHTML = (newValue * 3.25)

    var cookietwo = cart.cookietwo
    cookietwo = newValue
    localStorage.setItem("cookietwo", cookietwo)
    allCost()
  }
}

function cookiethreeSubmit(){
  let newValue = document.getElementById("cookiethree").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cookiethreeamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiethreecost")
    newCost.innerHTML = (newValue * 3.25)

    var cookiethree = cart.cookiethree
    cookiethree = newValue
    localStorage.setItem("cookiethree", cookiethree)
    allCost()
  }
}

function cookiefourSubmit(){
  let newValue = document.getElementById("cookiefour").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cookiefouramount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiefourcost")
    newCost.innerHTML = (newValue * 3.25)

    var cookiefour = cart.cookiefour
    cookiefour = newValue
    localStorage.setItem("cookiefour", cookiefour)
    allCost()
  }
}

function cookiefiveSubmit(){
  let newValue = document.getElementById("cookiefive").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cookiefiveamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiefivecost")
    newCost.innerHTML = (newValue * 3.25)

    var cookiefive = cart.cookiefive
    cookiefive = newValue
    localStorage.setItem("cookiefive", cookiefive)
    allCost()
  }
}

function cookiesixSubmit(){
  let newValue = document.getElementById("cookiesix").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cookiesixamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiesixcost")
    newCost.innerHTML = (newValue * 3.25)

    var cookiesix = cart.cookiesix
    cookiesix = newValue
    localStorage.setItem("cookiesix", cookiesix)
    allCost()
  }
}

function cookiesevenSubmit(){
  let newValue = document.getElementById("cookieseven").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cookiesevenamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookiesevencost")
    newCost.innerHTML = (newValue * 3.25)

    var cookieseven = cart.cookieseven
    cookieseven = newValue
    localStorage.setItem("cookieseven", cookieseven)
    allCost()
  }
}

function cookieeightSubmit(){
  let newValue = document.getElementById("cookieeight").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cookieeightamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cookieeightcost")
    newCost.innerHTML = (newValue * 3.25)

    var cookieeight = cart.cookieeight
    cookieeight = newValue
    localStorage.setItem("cookieeight", cookieeight)
    allCost()
  }
}

function cakeoneSubmit(){
  let newValue = document.getElementById("cakeone").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cakeoneamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakeonecost")
    newCost.innerHTML = (newValue * 45.25)

    var cakeone = cart.cakeone
    cakeone = newValue
    localStorage.setItem("cakeone", cakeone)
    allCost()
  }
}

function caketwoSubmit(){
  let newValue = document.getElementById("caketwo").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("caketwoamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("caketwocost")
    newCost.innerHTML = (newValue * 45.25)

    var caketwo = cart.caketwo
    caketwo = newValue
    localStorage.setItem("caketwo", caketwo)
    allCost()
  }
}

function cakethreeSubmit(){
  let newValue = document.getElementById("cakethree").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cakethreeamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakethreecost")
    newCost.innerHTML = (newValue * 45.65)

    var cakethree = cart.cakethree
    cakethree = newValue
    localStorage.setItem("cakethree", cakethree)
    allCost()
  }
}

function cakefourSubmit(){
  let newValue = document.getElementById("cakefour").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cakefouramount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakefourcost")
    newCost.innerHTML = (newValue * 45.50)

    var cakefour = cart.cakefour
    cakefour = newValue
    localStorage.setItem("cakefour", cakefour)
    allCost()
  }
}

function cakefiveSubmit(){
  let newValue = document.getElementById("cakefive").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cakefiveamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakefivecost")
    newCost.innerHTML = (newValue * 45.65)

    var cakefive = cart.cakefive
    cakefive = newValue
    localStorage.setItem("cakefive", cakefive)
    allCost()
  }
}

function cakesixSubmit(){
  let newValue = document.getElementById("cakesix").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cakesixamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakesixcost")
    newCost.innerHTML = (newValue * 45.50)

    var cakesix = cart.cakesix
    cakesix = newValue
    localStorage.setItem("cakesix", cakesix)
    allCost()
  }
}

function cakesevenSubmit(){
  let newValue = document.getElementById("cakeseven").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cakesevenamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakesevencost")
    newCost.innerHTML = (newValue * 45.65)

    var cakeseven = cart.cakeseven
    cakeseven = newValue
    localStorage.setItem("cakeseven", cakeseven)
    allCost()
  }
}

function cakeeightSubmit(){
  let newValue = document.getElementById("cakeeight").value
  if(newValue < 0){
    errorZero()
  }
  else{
    let newAmount = document.getElementById("cakeeightamount")
    newAmount.innerHTML = newValue
    let newCost = document.getElementById("cakeeightcost")
    newCost.innerHTML = (newValue * 45.65)

    var cakeeight = cart.cakeeight
    cakeeight = newValue
    localStorage.setItem("cakeeight", cakeeight)
    allCost()
  }
}

//Greater than 0
function errorZero(){
  let myAlert = document.getElementById('greaterZero');
  let bsAlert = new bootstrap.Toast(myAlert);
  bsAlert.show();
}

// All Cost
function allCost(){
  let showcost = document.getElementById("showcost")

  let cupcakeonecost = document.getElementById("cupcakeonecost")
  let cupcaketwocost = document.getElementById("cupcaketwocost")
  let cupcakethreecost = document.getElementById("cupcakethreecost")
  let cupcakefourcost = document.getElementById("cupcakefourcost")
  let cupcakefivecost = document.getElementById("cupcakefivecost")
  let cupcakesixcost = document.getElementById("cupcakesixcost")
  let cupcakesevencost = document.getElementById("cupcakesevencost")
  let cupcakeeightcost = document.getElementById("cupcakeeightcost")
  let totalcupcakecost = parseFloat(cupcakeonecost.innerHTML) + parseFloat(cupcaketwocost.innerHTML) + parseFloat(cupcakethreecost.innerHTML) + parseFloat(cupcakefourcost.innerHTML) + parseFloat(cupcakefivecost.innerHTML) + parseFloat(cupcakesixcost.innerHTML) + parseFloat(cupcakesevencost.innerHTML) + parseFloat(cupcakeeightcost.innerHTML)

  let cookieonecost = document.getElementById("cookieonecost")
  let cookietwocost = document.getElementById("cookietwocost")
  let cookiethreecost = document.getElementById("cookiethreecost")
  let cookiefourcost = document.getElementById("cookiefourcost")
  let cookiefivecost = document.getElementById("cookiefivecost")
  let cookiesixcost = document.getElementById("cookiesixcost")
  let cookiesevencost = document.getElementById("cookiesevencost")
  let cookieeightcost = document.getElementById("cookieeightcost")
  let totalcookiecost = parseFloat(cookieonecost.innerHTML) + parseFloat(cookietwocost.innerHTML) + parseFloat(cookiethreecost.innerHTML) + parseFloat(cookiefourcost.innerHTML) + parseFloat(cookiefivecost.innerHTML) + parseFloat(cookiesixcost.innerHTML) + parseFloat(cookiesevencost.innerHTML) + parseFloat(cookieeightcost.innerHTML)

  let cakeonecost = document.getElementById("cakeonecost")
  let caketwocost = document.getElementById("caketwocost")
  let cakethreecost = document.getElementById("cakethreecost")
  let cakefourcost = document.getElementById("cakefourcost")
  let cakefivecost = document.getElementById("cakefivecost")
  let cakesixcost = document.getElementById("cakesixcost")
  let cakesevencost = document.getElementById("cakesevencost")
  let cakeeightcost = document.getElementById("cakeeightcost")
  let totalcakecost = parseFloat(cakeonecost.innerHTML) + parseFloat(caketwocost.innerHTML) + parseFloat(cakethreecost.innerHTML) + parseFloat(cakefourcost.innerHTML) + parseFloat(cakefivecost.innerHTML) + parseFloat(cakesixcost.innerHTML) + parseFloat(cakesevencost.innerHTML) + parseFloat(cakeeightcost.innerHTML)

  let allcost = totalcupcakecost + totalcookiecost + totalcakecost

  if (Rewards15Save == "used"){
    allcost = allcost - (allcost * 0.15)
    let promocodecost = allcost
    allcost = promocodecost.toFixed(2)
  }

  showcost.innerHTML = allcost
  localStorage.setItem("allcost", allcost)
}

//Promocode
function promocodeSubmit(){
  var promocode = document.getElementById("code").value
  var used = "used"

  if (promocode == "Rewards15"){
    if (Rewards15Save == "true"){
      let myAlert = document.getElementById('redeemSuccess');
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
      localStorage.setItem("Rewards15", used)
      location.reload()
    }
    else{
      let myAlert = document.getElementById('redeemFail');
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
  }

  else{
    let myAlert = document.getElementById('redeemInvalid');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
  }
}

//Order Now
document.getElementById("orderButton").onclick = function() {
  checkInput()
  
  function checkInput() {              
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var card = document.getElementById("card").value
    var addy = document.getElementById("addy").value
    var state = document.getElementById("state").value

    if (!fname) {
      let myAlert = document.getElementById('firstName');
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
    else if(!lname){
      let myAlert = document.getElementById('lastName');
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
    else if(!card){
      let myAlert = document.getElementById('cardError');
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
    else if(!addy){
      let myAlert = document.getElementById('addressError');
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
    else if(!state){
      let myAlert = document.getElementById('stateError');
      let bsAlert = new bootstrap.Toast(myAlert);
      bsAlert.show();
    }
    else{
      let done = "done"
      if (Rewards15Save == "used"){
        localStorage.setItem("Rewards15", done)
      }
      window.location.href = "thankyou.html"
    }
    return true;
  }
}

//End of checkout for cart.html