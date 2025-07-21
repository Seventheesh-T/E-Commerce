document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Block default form submission

    // Fetch inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();    
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("DOB").value;
    const  terms = document.getElementById("consent").checked;

    // Validate one by one
    if (name.length < 3) {
      alert("Please enter a valid name (at least 3 characters).");
      return; // Stop here
    }

    const emailid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailid.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long(use special chars).");
      return;
    }

    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    if (!dob) {
      alert("Please select your date of birth.");
      return;
    }

    if (!terms) {
      alert("Please accept the terms and conditions.");
      return;
    }

     // Check for existing user
    const existingData = JSON.parse(localStorage.getItem("userData"));

    if (existingData) {
      if (existingData.email === email) {
        alert(" Email already registered!");
        return;
      }
      if (existingData.phone === phone) {
        alert(" Phone number already registered!");
        return;
      }
    }

    // All valid — Store data
    const userData = {
      name,
      email,
      phone,
      password,
      gender: gender.value,
      dob
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registration successful!");

    // Optional redirect
    window.location.href = "login.html"; // Or any other next page
  });
});
