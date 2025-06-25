// Inicializar AOS
AOS.init({
    duration: 800,
    once: true
});

// Animação para mostrar os cards quando visíveis
const portfolioCards = document.querySelectorAll('.portfolio-card');
const testimonialCards = document.querySelectorAll('.testimonial-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

portfolioCards.forEach(card => {
    observer.observe(card);
});

testimonialCards.forEach(card => {
    card.classList.add('show');
});

// Animação para o slider before/after
document.querySelectorAll('.before-after-container').forEach(container => {
    const handle = container.querySelector('.slider-handle');
    const afterImage = container.querySelector('.after-image');
    
    let isDragging = false;
    
    const moveSlider = (e) => {
        if (!isDragging) return;
        
        const containerRect = container.getBoundingClientRect();
        let position = (e.clientX - containerRect.left) / containerRect.width;
        position = Math.max(0, Math.min(1, position));
        
        afterImage.style.width = `${position * 100}%`;
        handle.style.left = `${position * 100}%`;
    };
    
    handle.addEventListener('mousedown', () => {
        isDragging = true;
        container.style.cursor = 'ew-resize';
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'default';
    });
    
    document.addEventListener('mousemove', moveSlider);
    
    // Touch events for mobile
    handle.addEventListener('touchstart', () => {
        isDragging = true;
    });
    
    document.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        moveSlider(touch);
    });
});
