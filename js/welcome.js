var name=localStorage.getItem('welcome');
var username=document.querySelector('h2').innerHTML= "Welcome "+name
var logOut=document.querySelector('button');
logOut.addEventListener('click',function(){
    location.href="login.html";

})




