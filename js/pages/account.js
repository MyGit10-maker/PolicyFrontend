/**
 * Policy Bridge - Account Page Functions
 */

function initAccountPage() {
    // Tab switching
    const navTabs = document.querySelectorAll('.dashboard-sidebar .nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navTabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show target content
            tabContents.forEach(content => {
                content.classList.remove('show', 'active');
            });
            document.getElementById(targetId).classList.add('show', 'active');
        });
    });
    
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (email && password) {
                showNotification('Logging in...', 'info');
                
                setTimeout(() => {
                    showNotification('Login successful!', 'success');
                    // Show dashboard
                    const loginSection = document.getElementById('login-section');
                    const dashboardSection = document.getElementById('dashboard-section');
                    if (loginSection && dashboardSection) {
                        loginSection.style.display = 'none';
                        dashboardSection.style.display = 'block';
                    }
                }, 1500);
            } else {
                showNotification('Please fill all fields', 'warning');
            }
        });
    }
    
    // Register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('register-name')?.value || 
                         document.getElementById('first-name')?.value + ' ' + document.getElementById('last-name')?.value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('register-password').value;
            
            if (name && email && phone && password) {
                showNotification('Creating your account...', 'info');
                
                setTimeout(() => {
                    showNotification('Account created successfully!', 'success');
                    // Switch to login
                    const loginTab = document.querySelector('[data-bs-target="#login-tab"]');
                    if (loginTab) {
                        loginTab.click();
                    }
                }, 1500);
            } else {
                showNotification('Please fill all fields', 'warning');
            }
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            showNotification('Logging out...', 'info');
            
            setTimeout(() => {
                const loginSection = document.getElementById('login-section');
                const dashboardSection = document.getElementById('dashboard-section');
                if (dashboardSection && loginSection) {
                    dashboardSection.style.display = 'none';
                    loginSection.style.display = 'block';
                }
                showNotification('Logged out successfully', 'success');
            }, 1000);
        });
    }
    
    // Edit profile button
    const editProfileBtn = document.getElementById('edit-profile-btn');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', function() {
            showNotification('Opening profile editor...', 'info');
        });
    }
    
    // Renew policy buttons
    const renewButtons = document.querySelectorAll('.renew-policy-btn');
    renewButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const policyId = this.getAttribute('data-policy-id');
            showNotification(`Initiating renewal for policy ${policyId}...`, 'info');
        });
    });
}

window.initAccountPage = initAccountPage;

