document.addEventListener('DOMContentLoaded',function(){

    const form = document.getElementById('registration-form')
    document.addEventListener("submit", () =>{
        event.preventDefault()
    })
 const feedbackDiv = document.getElementById('form-feedback')
 let username = document.getElementById('username');
 let usernamevalue = username.value;
 username = username.trim();

 let email = document.getElementById('email');
 let emailvalue = email.value;
 email = email.trim();
 
 let password = document.getElementById('password');
 let passwordvalue = password.value;
 password = password.trim(); 

 let isValid = true

 let messages = []
 //messages.push()
})
 