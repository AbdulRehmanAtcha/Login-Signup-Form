// document.getElementById("sign").style.display = "none";
// var a = document.getElementById("first-butt");
// var b = document.getElementById("second-butt");
// a.style.background = "linear-gradient(220deg, rgba(247, 31, 31, 0.815), rgba(252, 12, 252, 0.815))";
// function tabChange(args){
//     if(args === '1'){
//         a.style.background = "linear-gradient(220deg, rgba(247, 31, 31, 0.815), rgba(252, 12, 252, 0.815))";
//         b.style.backgroundColor = "transparent";
//         document.getElementById("sign").style.display = "none";
//         document.getElementById("log").style.display = "block";
//     }
//     else if(args === '2'){
//         a.style.backgroundColor = "transparent";
//         b.style.background = "linear-gradient(220deg, rgba(247, 31, 31, 0.815), rgba(252, 12, 252, 0.815))";
//         document.getElementById("sign").style.display = "block";
//         document.getElementById("log").style.display = "none";
//     }
// }

document.getElementById("first-butt").style.backgroundColor = "darkgray";
document.getElementById("sign").style.display = "none";
function tabChange(args){
    if(args === '1'){
        document.getElementById("sign").style.display = "none";
        document.getElementById("log").style.display = "block";
        document.getElementById("first-butt").style.backgroundColor = "darkgray";
        document.getElementById("second-butt").style.backgroundColor = "lightgray";
        document.getElementById("first-butt").style.transition = "background-color 1s";
        document.getElementById("second-butt").style.transition = "background-color 1s";
        
    }
    else if(args === '2'){
        document.getElementById("sign").style.display = "block";
        document.getElementById("log").style.display = "none";
        document.getElementById("first-butt").style.backgroundColor = "lightgray";
        document.getElementById("second-butt").style.backgroundColor = "darkgray";
        document.getElementById("first-butt").style.transition = "background-color 1s";
        document.getElementById("second-butt").style.transition = "background-color 1s";
    }
}


var loginEmail = document.getElementById("log-email");
var loginPassword = document.getElementById("log-password");
document.getElementById("log-error").style.visibility = "hidden";

var flag = 0;
function loginSubmit(){
    if(loginEmail.value.length < 7 || loginPassword.value.length < 5){
        document.getElementById("log-error").style.visibility = "visible";
        document.getElementById("login-Error").innerText = "Invalid Email or Passsword!"
    }
    else{
        document.getElementById("log-error").style.visibility = "hidden";
        loginEmail.value = "";
        loginPassword.value = "";
    }
    
}




var signFirstName = document.getElementById("sign-first-name");
var signSecondName = document.getElementById("sign-second-name");
var signEmail = document.getElementById("sign-email");
var signPassword = document.getElementById("sign-password");
var signConfirmPassword = document.getElementById("sign-confirm-password");
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;

function signSubmit(){
    if(signFirstName.value.length < 3){
        document.getElementById("sign-first-name-error").innerText = "Please Enter Valid Name";
        flag1 = 1;
    }
    else{
        document.getElementById("sign-first-name-error").innerText = "";
        flag1 = 0;
    }
    if(signSecondName.value.length < 3){
        document.getElementById("sign-last-name-error").innerText = "Please Enter Valid Name";
        flag2 = 1;
    }
    else{
        document.getElementById("sign-last-name-error").innerText = "";
        flag2 = 0;
    }
    if(signEmail.value.length < 7){
        document.getElementById("sign-email-error").innerText = "Please Enter Valid Email";
        flag3 = 1;
    }
    else{
        document.getElementById("sign-email-error").innerText = "";
        flag3 = 0;
    }
    if(signPassword.value.length < 5){
        document.getElementById("sign-password-error").innerText = "Your passwor should contain length of 5";
        flag4 = 1;
    }
    else{
        document.getElementById("sign-password-error").innerText = "";
        flag4 = 0;
    }
    if(signConfirmPassword.value.length !== signPassword.value.length){
        document.getElementById("sign-confirm-password-error").innerText = "Password didn't match";
        flag5 = 1;
    }
    else{
        document.getElementById("sign-confirm-password-error").innerText = "";
        flag5 = 0;
    }
    if(flag1 === 0 && flag2 === 0 && flag3 === 0 && flag4 === 0 && flag5 === 0){
        signFirstName.value = "";
        signSecondName.value = "";
        signEmail.value = "";
        signPassword.value = "";
        signConfirmPassword.value = "";
        document.getElementById("sign-first-name-error").innerText = "";
        document.getElementById("sign-last-name-error").innerText = "";
        document.getElementById("sign-email-error").innerText = "";
        document.getElementById("sign-password-error").innerText = "";
        document.getElementById("sign-confirm-password-error").innerText = "";  
    }
}