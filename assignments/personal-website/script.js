// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // TODO: Add form validation here
        // - Check if name is not empty
        // - Check if email is in valid format (use regex or built-in validation)
        // - Check if message is not empty
        
        // Validate form
        if (!name || !email || !message) {
            showFormError('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormError('Please enter a valid email address');
            return;
        }
        
        // Log form data to console (for now)
        console.log('Form Submitted:', {
            name: name,
            email: email,
            message: message
        });
        
        // Show success message
        showFormSuccess('Thank you! Your message has been sent.');
        
        // Reset form
        contactForm.reset();
    });
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show error message
function showFormError(message) {
    formResponse.textContent = message;
    formResponse.style.color = '#e74c3c';
    formResponse.style.marginTop = '1rem';
    formResponse.style.fontSize = '1rem';
}

// Helper function to show success message
function showFormSuccess(message) {
    formResponse.textContent = message;
    formResponse.style.color = '#27ae60';
    formResponse.style.marginTop = '1rem';
    formResponse.style.fontSize = '1rem';
}

// TODO: Add more interactivity!
// Consider implementing:
// - A toggle for mobile navigation menu
// - A theme switcher (light/dark mode)
// - Scroll animations for elements coming into view
// - Image gallery for projects with navigation
// - Any other interactive features you'd like!
