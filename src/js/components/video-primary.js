const videoPrimary = () => {
    const videos = document.querySelectorAll('.video-primary');
    videos.forEach(video => {
        const videoBody = video.querySelector('.video-primary__body');
        video.addEventListener('click', (e) => {
            if (videoBody.paused) {
                videoBody.play();
                video.classList.remove('_pause');
            } else {
                videoBody.pause();
                video.classList.add('_pause');
            }
        });
    });
};

export default videoPrimary;
