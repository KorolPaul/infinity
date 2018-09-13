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

document.querySelector('.assistant').addEventListener('touchmove', function (e) {
    var width = window.innerWidth / 2,
        x = e.touches[0].clientX,
        angle = x * 100 / width - 75;

    var wheel = document.querySelector('.assistant_wheel');
    var lights = document.querySelectorAll('.assistant_light');

    wheel.style.transform = 'rotate(' + angle / 2 + 'deg)';
    lights[0].style.transform = 'rotate(' + angle / 2 + 'deg)';
    lights[1].style.transform = 'rotate(' + angle / 2 + 'deg)';
});
'use strict';

var loadingPercentElement = document.querySelector('.loading_percent-value');
var IS_MOBILE = window.innerWidth < 786;

var player = null;

function closeIntro() {
    document.body.classList.add('faded');
    setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.add('dark');
        document.querySelector('.intro').innerHTML = '';
    }, IS_MOBILE ? 0 : 2000);

    if (!IS_MOBILE) {
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
    } else {
        setTimeout(function () {
            document.body.classList.add('scrolled');

            setTimeout(function () {
                changeSlide(1);
                setCounters();
            }, 500);
        }, 5000);
    }

    setTimeout(function () {
        setSpeedChange();
    }, 2000);
};

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

if (!IS_MOBILE) {
    var onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
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
    };

    var onPlayerReady = function onPlayerReady(event) {
        //event.target.playVideo();
        init();
        var fadeInterval = setInterval(function () {
            if (player.getDuration() - player.getCurrentTime() <= 2) {
                closeIntro();
                clearInterval(fadeInterval);
            }
        }, 1000);
    };

    var onPlayerStateChange = function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED && !done) {
            player.stopVideo();
            closeIntro();
            done = true;
        }
    };

    /* Youtube */
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var done = false;
} else {
    closeIntro();
}
"use strict";

window.addEventListener('load', function () {

  initSliders();

  var slides = document.getElementsByClassName("glide_slides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.backfaceVisibility = "visible";
  }

  document.querySelector('.menu-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    e.currentTarget.classList.toggle('opened');
    document.querySelector('.menu').classList.toggle('opened');
  });
});

function initSliders() {
  console.log('sliders init');

  new Glide('.content_left .content_step__2  .slider', {
    type: 'slider',
    perView: 1
  }).mount();

  new Glide('.content_right .content_step__2  .slider', {
    type: 'slider',
    perView: 1
  }).mount();

  new Glide('.content_step__4  .slider', {
    type: 'slider',
    perView: 1
  }).mount();
}
'use strict';

var prevSlideElement = document.querySelector('.js-prev-slide');
var nextSlideElement = document.querySelector('.js-next-slide');
var icons = document.querySelectorAll('.sections_icon');
var menuLinks = document.querySelectorAll('.menu_link');

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
    console.log(index, oldIndex);
    if (!isAnimated && index !== oldIndex) {
        isAnimated = true;
        slide = parseInt(index);
        document.body.dataset.slide = index;
        document.body.dataset.old = oldIndex;
        changeActiveIcon(index);

        setTimeout(function () {
            isAnimated = false;
        }, IS_MOBILE ? 0 : 4000);

        if (slide === 4) {
            initSliders();
        }
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

if (IS_MOBILE) {
    setTimeout(function () {
        document.querySelector('.switcher_left').addEventListener('click', function (e) {
            prevSlide();
        });
        document.querySelector('.switcher_right').addEventListener('click', function (e) {
            nextSlide();
        });
    }, 5000);
}

for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function (e) {
        e.preventDefault();
        changeSlide(parseInt(e.target.dataset.index), slide);
    });
}
for (var _i = 0; _i < menuLinks.length; _i++) {
    menuLinks[_i].addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.menu').classList.toggle('opened');
        document.querySelector('.menu-toggle').classList.toggle('opened');
        changeSlide(parseInt(e.target.dataset.index), slide);
    });
}
'use strict';

function setSpeedChange() {
    if (!IS_MOBILE) {
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
    } else {
        document.querySelector('.venom__mobile').addEventListener('click', function (e) {
            document.body.classList.toggle('dark');
            document.body.classList.toggle('light');
            initSliders();
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