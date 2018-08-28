'use strict';

var loadingPercentElement = document.querySelector('.loading_percent-value');
var loadingInterval = setInterval(function () {
    var percent = parseInt(loadingPercentElement.innerHTML);
    if (percent < 100) {
        loadingPercentElement.innerHTML = ++percent;
    } else {
        document.body.classList.add('show-intro');
        document.querySelector('.intro iframe').src = 'https://www.youtube.com/embed/NRFjsh_aOC8?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;color=white';
        clearInterval(loadingInterval);
        //document.body.classList.add('loaded');
        //setTimeout(()=> {
        //    setSpeedChange();
        //}, 2000);

        document.querySelector('.intro_close').addEventListener('click', closeIntro);
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 27) {
                closeIntro();
            }
        });
    }
}, 1);

var closeIntro = function closeIntro() {
    document.querySelector('.intro iframe').remove();
    document.body.classList.add('loaded');
    window.addEventListener('wheel', function addScroll(e) {
        document.body.classList.add('scrolled');

        setTimeout(function () {
            changeSlide(1);
            window.removeEventListener('wheel', addScroll);
            window.addEventListener('wheel', function (e) {
                if (e.deltaY > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            });
        }, 5000);
    });

    setTimeout(function () {
        setSpeedChange();
    }, 2000);
};
'use strict';

window.addEventListener('load', function () {});
'use strict';

var prevSlideElement = document.querySelector('.js-prev-slide');
var nextSlideElement = document.querySelector('.js-next-slide');
var icons = document.querySelectorAll('.sections_icon');

var slide = 0,
    isAnimated = false;

var prevSlide = function prevSlide() {
    if (slide > 1) {
        changeSlide(slide - 1, slide);
    }
};

var nextSlide = function nextSlide() {
    if (slide < 5) {
        changeSlide(slide + 1, slide);
    }
};

var changeSlide = function changeSlide(index, oldIndex) {
    if (!isAnimated) {
        isAnimated = true;
        slide = index;
        document.body.dataset.slide = index;
        document.body.dataset.old = oldIndex;
        changeActiveIcon(index);

        setTimeout(function () {
            isAnimated = false;
        }, 1000);
    }
};

var changeActiveIcon = function changeActiveIcon(index) {
    icons.forEach(function (el) {
        el.classList.remove('sections_icon__active');
    });
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
icons.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        changeSlide(e.target.dataset.index, slide);
    });
});
'use strict';

var setSpeedChange = function setSpeedChange() {
    document.querySelector('.js-light').addEventListener('mouseenter', function () {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    });

    document.querySelector('.js-dark').addEventListener('mouseenter', function () {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    });
};