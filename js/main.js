var swiper = new Swiper(".my-swiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    slidesPerGroup: 3,
    initialSlide: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 222,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 14,
            slidesPerGroup: 3,
        }

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const headerButton = document.querySelector('.header-button');
if (headerButton) {
    const headerMenu = document.querySelector('.header-menu');
    headerButton.addEventListener("click", function(e) {
        headerButton.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
}