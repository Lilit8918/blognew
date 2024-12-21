// Add event listener for form submission
document.getElementById('createUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Retrieve form input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate and create a new user object
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password
    };
  
    // Store user data locally (or send to backend API)
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    // Redirect or show success message
    window.location.href = 'home.html';
  });
  