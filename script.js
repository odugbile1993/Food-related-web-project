// Form Validation Script
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');
    
    form.addEventListener('submit', function(event) {
        let valid = true;
        
        if (!name.value) {
            alert("Please enter your name.");
            valid = false;
        }
        
        if (!email.value) {
            alert("Please enter your email.");
            valid = false;
        }
        
        if (!message.value) {
            alert("Please enter a message.");
            valid = false;
        }
        
        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
