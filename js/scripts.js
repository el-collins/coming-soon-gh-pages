// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('contactForm');
    
    // Get the email input element
    const emailInput = document.getElementById('email');
    
    // Get the submit button
    const submitButton = document.getElementById('submitButton');
    
    // Get the success and error message elements
    const successMessage = document.getElementById('submitSuccessMessage');
    const errorMessage = document.getElementById('submitErrorMessage');

    // Function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to show an error message
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('d-none');
        successMessage.classList.add('d-none');
    }

    // Function to show a success message
    function showSuccess() {
        successMessage.classList.remove('d-none');
        errorMessage.classList.add('d-none');
    }

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the email value
        const email = emailInput.value.trim();

        // Validate the email
        if (!email) {
            showError('An email is required.');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Please enter a valid email address.');
            return;
        }

        // If we get here, the email is valid
        // In a real application, you would send the data to your server here
        // For this example, we'll just simulate a server request with a timeout

        // Disable the submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Simulate server request
        setTimeout(function() {
            // Enable the submit button and restore its text
            submitButton.disabled = false;
            submitButton.textContent = 'Notify Me!';

            // Show success message
            showSuccess();

            // Clear the form
            form.reset();
        }, 2000); // Simulate a 2-second delay
    });

    // Add event listener for email input to remove disabled class from submit button
    emailInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            submitButton.classList.remove('disabled');
        } else {
            submitButton.classList.add('disabled');
        }
    });
});