document.addEventListener('DOMContentLoaded',function(){

    const form = document.getElementById('registration-form')
    document.addEventListener("submit", () =>{
        event.preventDefault()
        const feedbackDiv = document.getElementById('form-feedback')
        let username = document.getElementById('username');
        let usernamevalue = username.value.trim();
        console.log(username)

        let email = document.getElementById('email');
        let emailvalue = email.value.trim();
        
        let password = document.getElementById('password');
        let passwordvalue = password.value.trim();

        let isValid = true
 //let messages = [username.error(username, $[must], $[longer])]
        let messages = [];
        if (username.length < 3) {
            isValid = false 
            messages.push('password too short');
          }else{
          isValid = true
        }
        if (email.includes('@') && email.includes('.')) {
          isValid = true
          }else{
            isValid = false
            messages.push("email must include '@' and '.'")
          }

        if (password >= 8) {
          isValid = true
          }else{
            isValid = false
            messages.push('password must be not be less than 8 characters')
          }
        if (isValid === true) {
          feedbackDiv.style.color = '#28a745'
          feedbackDiv.innerHTML = 'registeration is sucessful'
          }else{
            feedbackDiv.innerHTML = messages
          }
    })
 

 //condition statement
 

 
 console.log(messages)
 //messages.push()
})
 