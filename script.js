let offset = 0; //Смещение от левого края
const sliderLine = document.querySelector('.slider-line');

let func = function () {
    offset = offset + 570;
    sliderLine.style.left = offset + 'px'
}

document.querySelector('.slider-next').addEventListener('click', function() {
    offset = offset + 570;
    if (offset > 1710) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';

    
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset - 570;
    if (offset < 0) {
        offset = 1710;
    }
    sliderLine.style.left = -offset + 'px';

    
});