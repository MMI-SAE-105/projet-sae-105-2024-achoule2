document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Fonction pour mettre à jour le carousel
    function updateCarousel(index) {
        carouselContainer.style.transform = `translateX(-${index * 103}%)`;
        
        // Mise à jour des points de navigation
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Gestionnaire de clic pour les points de navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    // Défilement automatique
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel(currentIndex);
    }

    // Démarrer le défilement automatique
    const slideInterval = setInterval(autoSlide, 5000);

    // Arrêter le défilement au survol
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    // Reprendre le défilement à la sortie du survol
    carouselContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(autoSlide, 5000);
    });

    // Support tactile
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0 && currentIndex < totalItems - 1) {
                // Swipe gauche
                currentIndex++;
            } else if (difference < 0 && currentIndex > 0) {
                // Swipe droite
                currentIndex--;
            }
            updateCarousel(currentIndex);
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Gestion du changement de langue
    // const langLinks = document.querySelectorAll('.lang-link');
    // langLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         langLinks.forEach(l => l.classList.remove('active'));
    //         this.classList.add('active');
    //         // Ici, vous pouvez ajouter la logique pour changer la langue du site
    //     });
    // });
});



