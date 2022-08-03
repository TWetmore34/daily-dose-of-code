const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#emailAddressLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();
    
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#emailAddressSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
  
    console.log(username);

    if (username && email && password) {
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      
  
      if (response.ok) {
        document.location.replace('/home');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-button')
    .addEventListener('click', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  