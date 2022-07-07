var userName = document.getElementById("userName")
var userPassword = document.getElementById("userPassword")
var userEmail = document.getElementById("userEmail")
var signupButton = document.querySelector('.login button')
var wrongSignup=document.getElementsByTagName('h5')
var users;
var regexEmail = /^\w{3,10}@[a-z]{3,7}.com$/;
var regexPassword = /\w{3,10}/;
var regexName = /\w{3,}/;

if (localStorage.getItem('userData') == null) {
    users = [];
}
else {
    users = JSON.parse(localStorage.getItem('userData'))
}

signupButton.addEventListener('click', function () {


    var userData = {
        Name: userName.value,
        password: userPassword.value,
        email: userEmail.value
    }


    if(regexEmail.test(userData.email)){
        console.log("s7");
    }

    if (regexEmail.test(userData.email) && regexPassword.test(userData.password) && regexName.test(userName)) {
        users.push(userData)
        localStorage.setItem('userData', JSON.stringify(users))
        location.href = "login.html";
    }
    else
    {

        wrongSignup[0].style.cssText='visibility: visible !important';

    }
   


})




