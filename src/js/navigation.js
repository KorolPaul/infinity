const prevSlideElement = document.querySelector('.js-prev-slide');
const nextSlideElement = document.querySelector('.js-next-slide');
const icons = document.querySelectorAll('.sections_icon');

let slide = 0,
    isAnimated = false;

function prevSlide() {
    if (slide > 1) {
        changeSlide(slide - 1, slide);
    }
};

function nextSlide() {
    if (slide < 6) {
        changeSlide(slide + 1, slide);
    }
};

function changeSlide(index, oldIndex) {
    if (!isAnimated) {
        isAnimated = true;
        slide = parseInt(index);
        document.body.dataset.slide = index;
        document.body.dataset.old = oldIndex;
        changeActiveIcon(index);

        setTimeout(function () {
            isAnimated = false;
        }, 4000);
    }
};

function changeActiveIcon(index) {
    for(let i = 0; i < icons.length; i++) {
        icons[i].classList.remove('sections_icon__active');
    }
    icons[index - 1].classList.add('sections_icon__active');
};

prevSlideElement.addEventListener('click', function (e) {
    e.preventDefault();
    prevSlide();
});
nextSlideElement.addEventListener('click', function (e) {
    e.preventDefault();
    nextSlide();
});


for(let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function (e) {
        e.preventDefault();
        changeSlide(e.target.dataset.index, slide);
    });
}
