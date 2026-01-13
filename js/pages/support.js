/**
 * Policy Bridge - Support Page Functions
 */

function initSupportPage() {
    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const question = this.querySelector('.accordion-button').textContent;
            console.log('FAQ viewed:', question);
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm()) {
                showNotification('Sending your message...', 'info');
                
                setTimeout(() => {
                    showNotification('Message sent successfully! We\'ll respond within 24 hours.', 'success');
                    contactForm.reset();
                }, 1500);
            }
        });
    }
    
    // Live chat button
    const chatBtn = document.getElementById('live-chat-btn');
    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            showNotification('Connecting to live chat...', 'info');
            
            setTimeout(() => {
                showNotification('Live chat is available! An agent will be with you shortly.', 'success');
            }, 2000);
        });
    }
}

function validateContactForm() {
    const requiredFields = ['contact-name', 'contact-email', 'contact-subject', 'contact-message'];
    let isValid = true;
    
    requiredFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (field && !field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else if (field) {
            field.classList.remove('is-invalid');
        }
    });
    
    // Validate email format
    const emailField = document.getElementById('contact-email');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.classList.add('is-invalid');
            isValid = false;
        }
    }
    
    return isValid;
}

window.initSupportPage = initSupportPage;
window.validateContactForm = validateContactForm;

