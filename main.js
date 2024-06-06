//Start of toast for index.html
document.getElementById("toastbtn").onclick = function() {
  
  var nameInput = document.getElementById("name")
  var emailInput = document.getElementById("email")
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if(nameInput.value == "") {
    let myAlert = document.getElementById('nameError');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
  }

  else if(emailInput.value == "") {
    let myAlert = document.getElementById('emailError');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
  }

  else if(emailInput.value.match(validRegex)) {
    let myAlert = document.getElementById('inputSuccess');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
  } 

  else{
    let myAlert = document.getElementById('invalidEmail');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
  }
}
//End of toast for index.html