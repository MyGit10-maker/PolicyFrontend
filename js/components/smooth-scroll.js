/**
 * Policy Bridge - Smooth Scroll for Anchor Links
 */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                // Add smooth scrolling animation
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Highlight the section temporarily
                target.style.transition = 'background-color 0.5s ease';
                const originalBg = target.style.backgroundColor;
                target.style.backgroundColor = 'rgba(0, 102, 204, 0.05)';
                
                setTimeout(() => {
                    target.style.backgroundColor = originalBg;
                }, 1500);
            }
        });
    });
}

window.initSmoothScroll = initSmoothScroll;

