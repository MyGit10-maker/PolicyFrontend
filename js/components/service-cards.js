/**
 * Policy Bridge - Service Cards Functionality
 */

function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
        
        card.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            const cardTitle = this.querySelector('.card-title').textContent;
            
            // Add ripple effect
            addRippleEffect(event, this);
            
            // Show notification
            setTimeout(() => {
                showNotification(`Opening ${cardTitle}...`, 'info');
            }, 300);
            
            // Navigate after delay
            setTimeout(() => {
                if (href) {
                    window.location.href = href;
                }
            }, 800);
        });
    });
}

// Ripple effect for cards
function addRippleEffect(event, element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation if not exists
function initRippleStyles() {
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

window.initServiceCards = initServiceCards;
window.addRippleEffect = addRippleEffect;
window.initRippleStyles = initRippleStyles;

