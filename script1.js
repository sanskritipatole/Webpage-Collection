function validation() {

var first= document.getElementById('first').value
var last= document.getElementById('last').value
var birth= document.getElementById('birth').value
var email= document.getElementById('email').value
var password= document.getElementById('password').value
var regName = /^[a-zA-Z]+$/;
var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var passformat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

alert(" submit the following values ? "  )
if (first == "") {
  alert("**Please fill first name.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}

if(!regName.test(first)){
    alert('Invalid firstname.')
    return false;
}
if (last == "") {
  alert("**Please fill last name.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}

if(!regName.test(last)){
    alert('Invalid lastname.')
    return false;
}

if (birth == "") {
  alert("**Please fill birthdate.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}
if (email == "") {
  alert("**Please fill email.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}

if(!mailformat.test(email)){
    alert('**Invalid email format')
    return false;
}

if (password == "") {
  alert("**Please fill password.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}

if(!passformat.test(password)){
    alert('**Password must contain a number ans a special charecter')
    return false;
}


}
