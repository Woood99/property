// =========================================================================================



import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);



// =========================================================================================




function initSliders() {


    if (document.querySelector('.news-home__slider')) {
        new Swiper('.news-home__slider', {
            observer: true,
            observeParents: true,
            slidesPerView: 1.2,
            spaceBetween: 16,
            speed: 800,
            navigation: {
                prevEl: document.querySelector('.news-home .navigation-primary__arrow-prev'),
                nextEl: document.querySelector('.news-home .navigation-primary__arrow-next'),
            },

            breakpoints: {
                768: {
                    slidesPerView: 2.6,
                    spaceBetween: 24,
                },
            },
        });
    }
    if (document.querySelector('.gallery-slider')) {
        new Swiper('.gallery-slider', {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 12,
            speed: 800,
            navigation: {
                prevEl: document.querySelector('.contacts-home .navigation-primary__arrow-prev'),
                nextEl: document.querySelector('.contacts-home .navigation-primary__arrow-next'),
            },
        });
    }




}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
