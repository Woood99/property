import getHeightBlock from './modules/getHeightBlock';
import videoPrimary from './components/video-primary';
document.addEventListener('DOMContentLoaded', () => {
    videoPrimary();
    getHeightBlock('.header', '--header-height');
    window.addEventListener('resize', () => {
        getHeightBlock('.header', '--header-height');
    })

});
