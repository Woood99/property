// ========================================================================================


// Плагин кастом-скролла
// import 'simplebar';


// ========================================================================================


// Анимации по скроллу
// import AOS from 'aos';
// AOS.init();


// ========================================================================================


// Галерея

// Документация: https://www.lightgalleryjs.com/docs/
// Сниппет(HTML): gallery

// Подключение базового набора функционала
// import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, 
// lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min.js';

// Запуск
// const galleries = document.querySelectorAll('#galleryID');
// galleries.forEach(gallery => {
//     lightGallery(gallery, {
//         // plugins: [lgFullscreen],
//         licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
//         speed: 500,
//     });
// });


// ========================================================================================



import Choices from 'choices.js';

const selectPrimary = document.querySelectorAll('.select-primary__body');
if (selectPrimary.length >= 1) {
    selectPrimary.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: '',
            position: 'bottom',
        })
    });
}
const selectSearch = document.querySelectorAll('.select-search__body');
if (selectSearch.length >= 1) {
    selectSearch.forEach(el => {
        const choices = new Choices(el, {
            renderChoiceLimit: 3,
            searchPlaceholderValue: '',
            itemSelectText: '',
            position: 'bottom',
            noResultsText: 'Ничего не найдено',
        })
        el.addEventListener('showDropdown', () => {
            const input = el.closest('.select-search').querySelector('.choices__list--dropdown .choices__input');
            setTimeout(() => input.focus(), 400);
        })
    });
}
