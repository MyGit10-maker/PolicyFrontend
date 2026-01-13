/**
 * Policy Bridge - Scroll to Top Button
 */

function initScrollToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.className = 'scroll-to-top-btn';
    btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #0066cc;
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        font-size: 1.25rem;
    `;
    
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(btn);
    
    // Show/hide button based on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });
}

window.initScrollToTop = initScrollToTop;

