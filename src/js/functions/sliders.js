// =========================================================================================



import Swiper, {
    Navigation,
    Pagination,
    Thumbs,
    Autoplay,
    EffectCreative
} from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs, Autoplay, EffectCreative]);



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
            effect: "creative",
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 12,
            speed: 450,
            autoplay: {
                delay: 6000,
            },
            allowTouchMove: false,
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1]
                },
                next: {
                    translate: ["100%", 0, 0]
                }
            },
            pagination: {
                el: document.querySelector('.contacts-home .contacts-home__pagination'),
                clickable: true,
                bulletActiveClass: "active",
                renderBullet: function (index, className) {
                    return "<div class='swiper-thumbnail ".concat(className, "'>\n  <img src='").concat(this.slides[index].querySelector('img').src, "' alt='Thumbnail'>\n </div>");
                }
            }
        });
    }




}






// =========================================================================================





window.addEventListener("load", function (e) {
    initSliders();
});





// =========================================================================================
