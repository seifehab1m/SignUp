var loginButton=document.querySelector('.login button')
var userEmail=document.getElementById('userEmail')
var userPassword=document.getElementById('userPassword')
var WrongLogin=document.getElementsByTagName('h5')
var checkLogin="notSussesful"
console.log(WrongLogin);
var users = JSON.parse( localStorage.getItem('userData'))
if(users==null)
{
    users=0;
}
loginButton.addEventListener('click',function(){

    for(var i=0;i<users.length;i++)
    {
        if(userEmail.value==users[i].email&&userPassword.value==users[i].password)
        {
            checkLogin="sussesful"
            location.href="welcome.html";
            localStorage.setItem('welcome',users[i].Name)
        }
    }
    if(checkLogin=="notSussesful")
    {
        WrongLogin[0].style.cssText='visibility: visible !important';

    }


})