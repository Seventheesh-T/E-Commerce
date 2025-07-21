document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("fullName").value,
      mobile: document.getElementById("mobileNumber").value,
      email: document.getElementById("emailId").value,
      message: document.getElementById("message").value,
    };

    // Save to local storage
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    alert("Form submitted successfully!");

    form.reset();
  });
});
