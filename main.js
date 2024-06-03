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