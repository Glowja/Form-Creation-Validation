document.addEventListener('DOMContentLoaded',function(){

    const form = document.getElementById('registration-form')
    document.addEventListener("submit", () =>{
        event.preventDefault()
    })
 const feedbackDiv = document.getElementById('form-feedback')
 let username = document.getElementById('username');
 let usernamevalue = username.value;
 username = username.trim();
 console.log(username)

 let email = document.getElementById('email');
 let emailvalue = email.value;
 email = email.trim();
 
 let password = document.getElementById('password');
 let passwordvalue = password.value;
 password = password.trim(); 

 //condition statement
 let isValid = true
 if (username.length < 3) {
    isValid = false 
  }
  if (email) {
    isValid = false
  } 

 let messages = [username.error(username, $[must], $[longer])
]
 console.log(messages)
 //messages.push()
})
 