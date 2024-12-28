// Function to reveal more information when the "Read More" button is clicked
function revealMore(destinationId) {
  // Get the destination's additional information
  const extraInfo = document.getElementById(destinationId);
  
  // Toggle the display of the extra information
  if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
    extraInfo.style.display = "block";
  } else {
    extraInfo.style.display = "none";
  }
}

// Form validation for the contact page
document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Get form input fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple validation: check if fields are empty
  if (!name || !email || !message) {
    alert("All fields are required!");
    event.preventDefault();  // Prevent form submission
  } else {
    alert("Thank you for your message!");
  }
});

// Optional: Ensure form input fields are checked dynamically
document.getElementById('contactForm').addEventListener('input', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const submitButton = document.querySelector('.contact-form button');

  // Enable the submit button only when all fields are filled
  if (name && email && message) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Auto-disable the submit button when the page loads (for initial form state)
window.addEventListener('load', function() {
  document.querySelector('.contact-form button').disabled = true;
});

