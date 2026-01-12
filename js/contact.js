document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  var successMessage = document.getElementById("successMessage");
  var submitBtn = document.getElementById("submitBtn");
  var btnText = document.getElementById("btnText");
  var btnSpinner = document.getElementById("btnSpinner");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Button loading state
    submitBtn.disabled = true;
    btnText.textContent = "Sending...";
    btnSpinner.classList.remove("d-none");

    // Show success message
    successMessage.classList.remove("d-none");
    successMessage.classList.add("animate-success");

    // Fade out page
    setTimeout(function () {
      document.body.classList.add("fade-out");
    }, 800);

    // Redirect after fade
    setTimeout(function () {
      window.location.href = "thankyou.html";
    }, 1400);
  });
});
