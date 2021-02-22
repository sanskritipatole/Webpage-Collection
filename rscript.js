function validation() {

var first= document.getElementById('first').value
var last= document.getElementById('last').value
var birth= document.getElementById('birth').value
var email= document.getElementById('email').value
var password= document.getElementById('password').value
var regName = /^[a-zA-Z]+$/;
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
var passw =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;= /^[A-Za-z]\w{7,14}$/;

alert(" submit the following values ? "  )
if (first == "") {
  alert("**pls fill first name.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}

if(!regName.test(first)){
    alert('Invalid firstname.');
    return false;
}
if (last == "") {
  alert("**pls fill last name.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}

if(!regName.test(last)){
    alert('Invalid lastname.');
    return false;
}

if (birth == "") {
  alert("**pls fill birthdate.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}
if (email == "") {
  alert("**pls fill email.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}

/*if(!mailformat.test(email)){
    alert('Invalid email address.');
    return false;
}*/



if (password == "") {
  alert("**pls fill password.")
  //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
  return false;
}

}
/*if (!password.match(/[a-z]/g) && !password.match(/[A-Z]/g) && !password.match(/[0-9]/g) && !password.match( /[^a-zA-Z\d]/g) && !password.length >= 8)  {

              alert("**password invalid")
              return false;
            }*/
/*if(!passw.test(password)){
    alert('Invalid password.');
    return false;
}*/

/*if(pass.search(/ [0-9] /) == -1) {
  alert("**password must contain a number")
  //document.getElementById('password').innerHTML= "**password must contain a number";
  return false;
}  if (pass.search(/ [A-Z] /) == '-1') {
  alert("**password must contain a uppercase")
//  document.getElementById('password').innerHTML= "**password must contain a uppercase";
  return false;
}  if (pass.search(/ [!/@/#/$/%/^/&/*] /) == 0) {
  alert("**Password must contain a special character")
  //document.getElementById('password').innerHTML= " **Password must contain a special character";
  return false;
}*/
/*if (password.length < 8) {
        alert("Your password must be at least 8 characters")
        return false;
    }
if (password.search(/[a-z]/i) < 0) {
        alert("Your password must contain at least one letter.")
        return false;
    }
if (password.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit.")
        return false;
    }

if (password.search(/ [!/@/#/$/%/^/&/*] /) == 0) {
      alert("**Password must contain a special character")
      return false;
    }*/
