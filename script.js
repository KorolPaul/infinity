'use strict';

var accordionItems = document.querySelectorAll('.accordion_item');

for (var i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', changeAccordion);
}

function changeAccordion(e) {
    for (var _i = 0; _i < accordionItems.length; _i++) {
        accordionItems[_i].classList.remove('active');
    }
    e.currentTarget.classList.add('active');
}
'use strict';

document.querySelector('.assistant').addEventListener('mousemove', function (e) {
    var width = window.innerWidth / 2,
        x = e.clientX,
        angle = x * 100 / width - 50;

    var wheel = document.querySelector('.assistant_wheel');
    var lights = document.querySelectorAll('.assistant_light');

    wheel.style.transform = 'rotate(' + angle / 2 + 'deg)';
    lights[0].style.transform = 'rotate(' + angle / 2 + 'deg)';
    lights[1].style.transform = 'rotate(' + angle / 2 + 'deg)';
});
'use strict';

var loadingPercentElement = document.querySelector('.loading_percent-value');
var player = null;

function init() {

    var loadingInterval = setInterval(function () {
        var percent = parseInt(loadingPercentElement.innerHTML);
        if (percent < 100) {
            loadingPercentElement.innerHTML = ++percent;
        } else {
            document.body.classList.add('show-intro');
            clearInterval(loadingInterval);

            try {
                player.playVideo();
            } catch (err) {
                console.log(err);
            }

            document.querySelector('.intro_close').addEventListener('click', closeIntro);
            document.addEventListener('keyup', function (e) {
                if (e.keyCode == 27) {
                    closeIntro();
                }
            });
        }
    }, 20);

    var closeIntro = function closeIntro() {
        document.querySelector('.intro').innerHTML = '';
        document.body.classList.add('loaded');
        window.addEventListener('wheel', function addScroll(e) {
            document.body.classList.add('scrolled');

            setTimeout(function () {
                setCounters();
            }, 5500);

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
            }, 1500);
        });

        setTimeout(function () {
            setSpeedChange();
        }, 2000);
    };
}

function setCounters() {
    var counters = document.querySelectorAll('[data-number]'),
        options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.'
    };

    for (var i = 0; i < counters.length; i++) {
        var counter = new CountUp(counters[i], 0, counters[i].dataset.number, 0, 3, options);
        if (!counter.error) {
            counter.start();
        } else {
            console.error(counter.error);
        }
    }
}

/* Youtube */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '9BCdoCeS-Co',
        playerVars: { 'fullscreen': 1, 'controls': 0, 'showinfo': 0 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    //event.target.playVideo();
    init();
    var fadeInterval = setInterval(function () {
        if (player.getDuration() - player.getCurrentTime() <= 2) {
            document.body.classList.add('faded');
            clearInterval(fadeInterval);
        }
    }, 1000);
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED && !done) {
        player.stopVideo();
        closeIntro();
        done = true;
    }
}
'use strict';

window.addEventListener('load', function () {
  new Glide('.content_left .content_step__2  .slider', {
    type: 'slider',
    perView: 1
  }).mount();
  new Glide('.content_right .content_step__2  .slider', {
    type: 'slider',
    perView: 1
  }).mount();
  new Glide('.content_right .content_step__4  .slider', {
    type: 'slider',
    perView: 1
  }).mount();
});
'use strict';

var prevSlideElement = document.querySelector('.js-prev-slide');
var nextSlideElement = document.querySelector('.js-next-slide');
var icons = document.querySelectorAll('.sections_icon');

var slide = 0,
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
    for (var i = 0; i < icons.length; i++) {
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

for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function (e) {
        e.preventDefault();
        changeSlide(e.target.dataset.index, slide);
    });
}
'use strict';

function setSpeedChange() {
    for (var i = 0; i < document.querySelectorAll('.js-light').length; i++) {
        document.querySelectorAll('.js-light')[i].addEventListener('mouseenter', function () {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        });
    }

    for (var _i = 0; _i < document.querySelectorAll('.js-dark').length; _i++) {
        document.querySelectorAll('.js-dark')[_i].addEventListener('mouseenter', function () {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        });
    }
};
'use strict';

var tabsButtons = document.querySelectorAll('.tabs_button');
var tabsContent = document.querySelectorAll('.tabs_content');

for (var i = 0; i < tabsButtons.length; i++) {
    tabsButtons[i].addEventListener('click', changeTab);
}

function changeTab(e) {
    var tabIndex = e.currentTarget.dataset.tab - 1;

    for (var _i = 0; _i < tabsButtons.length; _i++) {
        tabsButtons[_i].classList.remove('active');
    }
    for (var _i2 = 0; _i2 < tabsContent.length; _i2++) {
        tabsContent[_i2].classList.remove('active');
    }

    tabsButtons[tabIndex].classList.add('active');
    tabsContent[tabIndex].classList.add('active');
}