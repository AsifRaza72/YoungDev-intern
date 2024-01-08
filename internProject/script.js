// function validateForm() {
//     // Get all input fields
//     const inputs = document.querySelectorAll("input[required]");
  
//     // Check if all fields are filled
//     for (const input of inputs) {
//       if (!input.value) {
//         alert("Please fill in all required fields!");
//         input.focus();
//         return false;
//       }
//     }
  
//     // Validate email format
//     const emailInput = document.querySelector("input[type='email']");
//     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
//       alert("Please enter a valid email address!");
//       emailInput.focus();
//       return false;
//     }
  
//     // Validate password length
//     const passwordInput = document.querySelector("input[type='password']");
//     if (passwordInput.value.length < 8) {
//       alert("Password must be at least 8 characters long!");
//       passwordInput.focus();
//       return false;
//     }
  
//     return true;
//   }
  
//   // Add smooth transition to login link click
//   const loginLink = document.querySelector('.account a');
//   loginLink.addEventListener('click', function(e) {
//     e.preventDefault();
//     const bodyElement = document.querySelector('body');
//     bodyElement.classList.add('fading-out');
//     setTimeout(() => {
//       window.location.href = loginLink.href; // redirect to login page
//     }, 10000); // adjust timing as needed
//   });
  
function validateForm() {
    // ... same validation logic as before ...
  }
  
  // Add slide-in transition to login link click
  const loginLink = document.querySelector('.account a');
  loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    const bodyElement = document.querySelector('body');
    bodyElement.classList.add('slide-out');
    const loginPage = document.querySelector('#login-page'); // adjust selector as needed
    loginPage.classList.add('slide-in');
    setTimeout(() => {
      bodyElement.classList.remove('slide-out');
    }, 1000);
  });
  