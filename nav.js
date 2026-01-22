// script.js
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Sidebar Toggle Functionality
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    // Toggle sidebar when hamburger is clicked
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
    
    // Close sidebar when close button is clicked
    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
    });
    
    // Close sidebar when a sidebar link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate the offset to account for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
    
    // Add active class to navbar links based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    function highlightNavLink() {
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    const link = item.querySelector('.nav-link');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Call on scroll
    window.addEventListener('scroll', highlightNavLink);
    
    // Add active styling for navbar items
    const style = document.createElement('style');
    style.textContent = `
        .nav-item.active .nav-link {
            color: #5a8dee;
            box-shadow: inset 5px 5px 10px #b8bec7, inset -5px -5px 10px #ffffff;
        }
    `;
    document.head.appendChild(style);
    
    // Add hover effect to all neomorphism cards
    const neoCards = document.querySelectorAll('.neo-card');
    
    neoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.5s ease';
        });
    });
});