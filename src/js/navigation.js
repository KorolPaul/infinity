const prevSlideElement = document.querySelector('.js-prev-slide');
const nextSlideElement = document.querySelector('.js-next-slide');
const icons = document.querySelectorAll('.sections_icon');


let slide = 0,
    isAnimated = false;

const prevSlide = function() {
    if (slide > 1) {
        changeSlide(slide - 1, slide);
    }
}

const nextSlide = function() {
    if (slide < 5) {
        changeSlide(slide + 1, slide);
    }
}

const changeSlide = function(index, oldIndex) {
    if(!isAnimated) {
        isAnimated = true;
        slide = index;
        document.body.dataset.slide = index;
        document.body.dataset.old = oldIndex;
        changeActiveIcon(index);

        setTimeout(() => {isAnimated = false}, 1000);
    }
}

const changeActiveIcon = function(index) {
    icons.forEach(el => {el.classList.remove('sections_icon__active')});
    icons[index -1].classList.add('sections_icon__active');
}


prevSlideElement.addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
});
nextSlideElement.addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
});
icons.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        changeSlide(e.target.dataset.index, slide);
    });
});
