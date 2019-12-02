var mySwiper1 = new Swiper('.s2', {
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

// -----------------------uncheck mobile menu by link press------------------

function uncheck() {
    document.getElementById("toggler").checked = false;
}

// -----------------------------------------
var menu = ['REGISTER', 'APPLY', 'RECEIVE']
var swiper1 = new Swiper('.s1', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
})


