// MarineStream Landing Page JavaScript

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash
            if (href === '#' || href === '') {
                return;
            }
            
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler
    const demoForm = document.querySelector('.cta-form form');
    
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                company: this.querySelectorAll('input[type="text"]')[1].value,
                fleetType: this.querySelector('select').value
            };
            
            console.log('Demo form submitted:', formData);
            
            // Here you would typically send the data to your backend
            // For now, just show an alert
            alert('Thank you for your interest! We will contact you shortly to schedule your demo.');
            
            // Reset form
            this.reset();
        });
    }
});

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.08)';
    }
});

