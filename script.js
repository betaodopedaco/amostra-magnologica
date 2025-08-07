// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Hero section animations
gsap.to('.hero-subtitle', {
    opacity: 1,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out"
});

gsap.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 0.8,
    ease: "power3.out"
});

gsap.to('.hero-text', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 1.3,
    ease: "power3.out"
});

gsap.to('.hero-buttons', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 1.8,
    ease: "power3.out"
});

// Scroll-based animations
gsap.utils.toArray('.reveal').forEach(element => {
    gsap.fromTo(element, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none"
        },
        ease: "power3.out"
    });
});

// Card hover animations
document.querySelectorAll('.portfolio-item, .feature-card, .portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.03,
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)",
            duration: 0.4,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            duration: 0.4,
            ease: "power2.out"
        });
    });
});

// Button hover effects
document.querySelectorAll('.cta-button, .btn, .portfolio-btn, .portfolio-btn-new, .science-proof-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Solicitação enviada com sucesso! Entraremos em contato em breve para oferecer nossa solução premium.');
        form.reset();
    });
});
