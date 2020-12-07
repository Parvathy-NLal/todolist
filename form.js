let email= document.getElementById("exampleInputEmail1");
// let pwd= document.getElementById("pwd");
let pwd= document.getElementById("exampleInputPassword1");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
function validate(){
   
    //A-Za-z0-9 can be replaced with \w
    if(email.value=="admin"){
        error.innerHTML = "Valid";
        error.style.color = "green";
        if(pwd.value==1234){
            error1.innerHTML="Valid";
            error1.style.color = "green";
            return true;
        }
        else{
            error1.innerHTML = "Invalid";
            error1.style.color= "red";
            return false;

        }
    
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color= "red";
        return false;
    }
}
