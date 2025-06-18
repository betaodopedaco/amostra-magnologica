document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });

    // Testimonials staggered fade-in
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, 500 * index);
    });

    // Before-After Slider functionality
    const sliders = document.querySelectorAll('.before-after-container');
    sliders.forEach(container => {
        const handle = container.querySelector('.slider-handle');
        const afterImage = container.querySelector('.after-image');

        let isDragging = false;

        const slide = (x) => {
            const containerRect = container.getBoundingClientRect();
            let position = ((x - containerRect.left) / containerRect.width) * 100;
            position = Math.max(0, Math.min(position, 100));

            afterImage.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        };

        handle.addEventListener('mousedown', (e) => {
            isDragging = true;
            e.preventDefault(); // Prevent default browser drag behavior
        });

        container.addEventListener('mousemove', (e) => {
            if (isDragging) {
                slide(e.clientX);
            }
        });

        container.addEventListener('touchmove', (e) => {
            if (isDragging) {
                slide(e.touches[0].clientX);
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Also make the entire container draggable
        container.addEventListener('click', (e) => {
            slide(e.clientX);
        });
    });

    // Animação de entrada dos cards da nova seção de portfólio
    const portfolioCardsNew = document.querySelectorAll('.portfolio-section-new .portfolio-card');
    
    // Função para verificar se o elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Função para mostrar os cards quando entram na viewport
    function showCardsOnScroll() {
        portfolioCardsNew.forEach((card, index) => {
            if (isElementInViewport(card) && !card.classList.contains('visible')) {
                // Adiciona um delay crescente para cada card
                setTimeout(() => {
                    card.classList.add('visible');
                }, 200 * index);
            }
        });
    }
    
    // Mostrar cards já visíveis no carregamento
    showCardsOnScroll();
    
    // Adicionar evento de scroll para mostrar os cards
    window.addEventListener('scroll', showCardsOnScroll);
});
