document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form reload

    // Get values from input fields
    const enteredEmail = document.getElementById("email").value.trim();
    const enteredPassword = document.getElementById("password").value;

    // Get stored data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    // Check if user data exists in localStorage
    if (!storedUser) {
      alert(" No user found. Please sign up first.");
      return;
    }

    // Validate email and password
    if (
      enteredEmail === storedUser.email &&
      enteredPassword === storedUser.password
    ) {
      alert("Login successful!");

      // Set logged-in status
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to bag.html (your main page)
      window.location.href = "index.html";
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  });
});
