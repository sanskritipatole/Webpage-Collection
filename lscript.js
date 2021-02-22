function validation() {

    var user= document.getElementById('username').value
    var pass= document.getElementById('password').value
    
    
    alert(" submit the following values ? "  )
    if (user == "") {
      alert("**pls fill username.")
      //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
      return false;
    }
    
    if (pass == "") {
      alert("**pls fill password.")
      //document.getElementById('mobno').innerHTML= "**pls fill mobile no.";
      return false;
    }
    
    if(user == pass){
        alert("**username and password should not be the same")
          //document.getElementById('username').innerHTML= "** should not be same";
          return false;
        }
    
    if(user.length < 4){
            alert("**user name should be greater than 4")
              //document.getElementById('username').innerHTML= "** should not be same";
              return false;
    }
    if(pass.length < 4){
            alert("**password should be greater than 4")
              //document.getElementById('username').innerHTML= "** should not be same";
              return false;
    }
    
    }