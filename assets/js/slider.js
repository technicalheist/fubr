document.addEventListener('DOMContentLoaded', function() {
    // Initialize the product gallery slider
    const productGallerySwiper = new Swiper('.product-gallery-swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px (sm)
            640: {
                slidesPerView: 2,
            },
            // when window width is >= 768px (md)
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 1024px (lg)
            1024: {
                slidesPerView: 5,
            }
        }
    });
});
