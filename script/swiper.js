var swiper1 = new Swiper(".mainSwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper2 = new Swiper(".doi-tac-Swiper", {
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
