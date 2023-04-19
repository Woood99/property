// =========================================================================================



import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);



// =========================================================================================




function initSliders() {


    if (document.querySelector('.news__slider')) {
        new Swiper('.news__slider', {
            observer: true,
            observeParents: true,
            slidesPerView: 1.2,
            spaceBetween: 12,
            speed: 800,
            navigation: {
                prevEl: document.querySelector('.news .navigation-primary__arrow-prev'),
                nextEl: document.querySelector('.news .navigation-primary__arrow-next'),
            },

            breakpoints: {
                768: {
                    slidesPerView: 2.6,
                    spaceBetween: 24,
                },
            },
        });
    }




}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
