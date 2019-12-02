var mySwiper1 = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 120,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1100: {
            slidesPerView: 3
        },
        700: {
            slidesPerView: 2
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

