// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    
    // Update active nav link
    updateActiveNavLink();
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    
    // Show success message
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Update active nav link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Typewriter effect for code
const codeLines = document.querySelectorAll('.code-line');
codeLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        line.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        line.style.opacity = '1';
        line.style.transform = 'translateX(0)';
    }, index * 100);
});

// Initialize
updateActiveNavLink();