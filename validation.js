function validateEmail() {
    const email = document.getElementById("email").value;
  
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the regex
    if (emailRegex.test(email)) {
      alert(`${email} is a valid email address.`);
    } else {
      alert(`${email} is not a valid email address.`);
    }
  }
  
