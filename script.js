// Example: Form validation (ensure required fields are filled)
document.querySelector('.contact-form').addEventListener('submit', function(event) {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (!name || !email || !message) {
    event.preventDefault(); // Stop the form submission
    alert('Please fill out all fields.');
  }
});
