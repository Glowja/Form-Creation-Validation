// document.addEventListener('DOMContentLoaded',function(){

//     const form = document.getElementById('registration-form')
//     document.addEventListener("submit", () =>{
//         event.preventDefault()
//         const feedbackDiv = document.getElementById('form-feedback')
//         let username = document.getElementById('username');
//         let usernamevalue = username.value.trim();
//         console.log(username)

//         let email = document.getElementById('email');
//         let emailvalue = email.value.trim();
        
//         let password = document.getElementById('password');
//         let passwordvalue = password.value.trim();

//         let isValid = true
//  //let messages = [username.error(username, $[must], $[longer])]
//         let messages = [];
//         if (username.length < 3) {
//             isValid = false 
//             messages.splice('password too short');
//           }else{
//           isValid = true
//         }
//         if (email.includes('@') && email.includes('.')) {
//           isValid = true
//           }else{
//             isValid = false
//             messages.splice("email must include '@' and '.'")
//           }

//         if (password >= 8) {
//           isValid = true
//           }else{
//             isValid = false
//             messages.splice('password must be not be less than 8 characters')
//           }
//           feedbackDiv.style.display = 'block'
//         if (isValid === true) {
//           feedbackDiv.style.color = '#28a745'
//           feedbackDiv.innerHTML = 'registeration is sucessful'
//           }else{
//             feedbackDiv.innerHTML = messages
//           }
//     })
 

//  //condition statement
 

 
//  console.log(messages)
//  //messages.push()
// })

document.getElementById('registration-form').addEventListener('submit', function(event) {
  const messages = []; // Array to store error messages
  let isValid = true;

  // Get the input values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Get the feedback container
  const feedbackDiv = document.getElementById('form-feedback');

  // Clear previous messages
  feedbackDiv.innerHTML = '';
  feedbackDiv.className = ''; // Clear any previous class

  // Validate username
  if (username.length < 3) {
      messages.push('Username must be at least 3 characters long.');
      isValid = false;
  }

  // Validate email
  if (!email.includes('@') || !email.includes('.')) {
      messages.push('Email must contain "@" and "."');
      isValid = false;
  }

  // Validate password
  if (password.length < 8) {
      messages.push('Password must be at least 8 characters long.');
      isValid = false;
  }

  // Display error messages or success message
  if (!isValid) {
      feedbackDiv.className = 'error'; // Apply error class
      feedbackDiv.style.display = 'block'; // Show feedback container
      messages.forEach(message => {
          const p = document.createElement('p');
          p.className = 'error';
          p.textContent = message;
          feedbackDiv.appendChild(p);
      });
      event.preventDefault(); // Prevent form submission if there are errors
  } else {
      feedbackDiv.className = 'success'; // Apply success class
      feedbackDiv.style.display = 'block'; // Show feedback container
      feedbackDiv.textContent = 'Registration Successful!';
      event.preventDefault(); // Prevent form submission for demonstration purposes
  }
});


 