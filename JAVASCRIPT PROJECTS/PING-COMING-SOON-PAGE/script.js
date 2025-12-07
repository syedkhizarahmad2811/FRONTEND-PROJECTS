// Select elements
const emailInput = document.getElementById('mail');
const notifyButton = document.getElementById('notifyme');
const messageBox = document.getElementById('mail-msg');
const validMailDiv = document.getElementById('valid-mail');

// Email validation function using regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Handle click event
notifyButton.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default button behavior

  const email = emailInput.value.trim();

  if (email === '') {
    // Empty email input
    messageBox.textContent = "Email is required.";
    messageBox.style.color = "red";
    messageBox.style.marginTop = "-735px";
    messageBox.style.marginLeft = "495px";
    emailInput.style.border = "2px solid red";
    validMailDiv.style.display = "block";
  } else if (!isValidEmail(email)) {
    // Invalid email
    messageBox.textContent = "Please provide a valid email address.";
    messageBox.style.color = "red";
    messageBox.style.marginTop = "-735px";
    messageBox.style.marginLeft = "490px";
    emailInput.style.border = "2px solid red";
    validMailDiv.style.display = "block";
  } else {
    // Valid email
    messageBox.textContent = "Thanks! You'll be notified.";
    messageBox.style.color = "green";
    emailInput.style.border = "2px solid green";
    validMailDiv.style.display = "block";

    // Optionally clear the input after a short delay
    setTimeout(() => {
      emailInput.value = "";
      emailInput.style.border = "";
      validMailDiv.style.display = "none";
    }, 3000);
  }
});
