const prevSlideElement = document.querySelector('.js-prev-slide');
const nextSlideElement = document.querySelector('.js-next-slide');
const icons = document.querySelectorAll('.sections_icon');
const menuLinks = document.querySelectorAll('.menu_link');

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
    } else if(slide === 6) {
        changeSlide(1, slide);
    }
};

function changeSlide(index, oldIndex) {
    console.log(index, oldIndex)
    if (!isAnimated && index !== oldIndex) {
        isAnimated = true;
        slide = parseInt(index);
        document.body.dataset.slide = index;
        document.body.dataset.old = oldIndex;
        changeActiveIcon(index);

        setTimeout(function () {
            isAnimated = false;
        }, IS_MOBILE ? 0: 4000);

        if(slide === 4) {
            initSliders();
        }
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

if(IS_MOBILE) {
    setTimeout(() => {
        document.querySelector('.switcher_left').addEventListener('click', function (e) {
            prevSlide();
        });
        document.querySelector('.switcher_right').addEventListener('click', function (e) {
            nextSlide();
        });
    }, 5000);
}


for(let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function (e) {
        e.preventDefault();
        changeSlide(parseInt(e.target.dataset.index), slide);
    });
}
for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.menu').classList.toggle('opened');
        document.querySelector('.menu-toggle').classList.toggle('opened');
        changeSlide(parseInt(e.target.dataset.index), slide);
    });
}
