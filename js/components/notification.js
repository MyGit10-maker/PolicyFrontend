/**
 * Policy Bridge - Notification System
 */

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

window.showNotification = showNotification;

