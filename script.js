// Policy Bazar - Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initSearch();
    initAnimations();
    initButtons();
    initServiceCards();
    initFooter();
    initSmoothScroll();
});

// Navbar functionality
function initNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbarCollapse.contains(event.target) || 
                             navbarToggler.contains(event.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
        }
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.padding = '0.75rem 0';
        }
    });
}

// Search functionality
function initSearch() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-form input[type="search"]');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm.length > 0) {
                // Simulate search functionality
                showNotification(`Searching for: "${searchTerm}"`, 'success');
                console.log('Search term:', searchTerm);
            } else {
                showNotification('Please enter a search term', 'warning');
                searchInput.focus();
            }
        });
        
        // Add live search feedback
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            if (searchTerm.length > 0) {
                this.style.backgroundColor = '#fff';
            }
        });
    }
}

// Animation on scroll
function initAnimations() {
    // Fade in elements on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.card, .feature-icon');
    animatedElements.forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Button interactions
function initButtons() {
    // Login button
    const loginBtn = document.querySelector('a[href="#"].btn-outline-primary');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            showModal('Login', 'login-modal');
        });
    }
    
    // Sign up button
    const signupBtn = document.querySelector('a[href="#"].btn-primary');
    if (signupBtn) {
        signupBtn.addEventListener('click', function(event) {
            event.preventDefault();
            showModal('Sign Up', 'signup-modal');
        });
    }
    
    // CTA buttons
    const ctaButtons = document.querySelectorAll('.hero-section .btn');
    ctaButtons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Service card buttons
    const serviceCardButtons = document.querySelectorAll('.service-card .btn');
    serviceCardButtons.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.closest('.service-card').getAttribute('href');
            const cardTitle = this.closest('.card-body').querySelector('.card-title').textContent;
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                showNotification(`Navigating to ${cardTitle}...`, 'info');
                
                // Simulate navigation after delay
                setTimeout(() => {
                    if (href && href !== '#') {
                        console.log('Navigating to:', href);
                        // window.location.href = href; // Uncomment for actual navigation
                    }
                }, 500);
            }, 150);
        });
    });
}

// Service Cards functionality
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-icon').style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-icon').style.transform = 'scale(1) rotate(0)';
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

// Footer functionality
function initFooter() {
    // Update current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Footer link interactions
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '5px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '';
        });
    });
    
    // Social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const platform = this.querySelector('i').classList.contains('fa-facebook-f') ? 'Facebook' :
                           this.querySelector('i').classList.contains('fa-twitter') ? 'Twitter' :
                           this.querySelector('i').classList.contains('fa-instagram') ? 'Instagram' : 'LinkedIn';
            
            showNotification(`Opening ${platform} page...`, 'info');
        });
    });
    
    // Contact links
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            
            if (href.startsWith('mailto:')) {
                showNotification(`Opening email client...`, 'info');
            } else if (href.startsWith('tel:')) {
                showNotification(`Initiating call...`, 'info');
            } else {
                showNotification('Opening contact information...', 'info');
            }
        });
    });
}

// Smooth scroll for anchor links
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

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(function(notification) {
        notification.remove();
    });
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
        max-width: 350px;
        background-color: ${type === 'success' ? '#d4edda' : type === 'warning' ? '#fff3cd' : '#cce5ff'};
        color: ${type === 'success' ? '#155724' : type === 'warning' ? '#856404' : '#004085'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'warning' ? '#ffeeba' : '#b8daff'};
    `;
    
    const icon = type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle';
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${icon} me-2" style="font-size: 1.25rem;"></i>
            <span style="font-weight: 500;">${message}</span>
        </div>
    `;
    
    // Add animation keyframes if not exists
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            .notification:hover {
                transform: scale(1.02);
                transition: transform 0.2s ease;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to body
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(function() {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() {
            notification.remove();
        }, 300);
    }, 3000);
}

// Modal placeholder function
function showModal(title, modalId) {
    console.log(`Opening ${title} modal`);
    // You can implement actual modal functionality here
    // For now, just show a notification
    showNotification(`${title} functionality coming soon!`, 'info');
}

// Add active state to current page in navbar
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Initialize active nav link
setActiveNavLink();

// Intersection Observer for service cards animation
const serviceCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe service cards
document.querySelectorAll('.service-card-inner').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    serviceCardObserver.observe(card);
});

// Footer link hover effects with tracking
const footerLinks = document.querySelectorAll('.footer-links .footer-link');
footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const linkText = this.textContent.trim();
        console.log(`Footer link clicked: ${linkText}`);
    });
});

// Policy type links tracking
const policyTypeLinks = document.querySelectorAll('.footer-links li:nth-child(-n+5) .footer-link');
policyTypeLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const policyType = this.textContent.trim();
        console.log(`Policy type selected: ${policyType}`);
    });
});

// Console welcome message
console.log('%cWelcome to Policy Bazar!', 'color: #0066cc; font-size: 24px; font-weight: bold;');
console.log('%cInsurance Made Simple', 'color: #666; font-size: 14px;');
console.log('%cServices loaded successfully!', 'color: #28a745; font-size: 12px;');

// Add page load performance tracking
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`%cPage loaded in ${loadTime}ms`, 'color: #0066cc; font-size: 12px;');
});

