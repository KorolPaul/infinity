'use strict';

var accordionItems = document.querySelectorAll('.accordion_item');

accordionItems.forEach(function (el) {
    el.addEventListener('click', changeAccordion);
});

function changeAccordion(e) {
    accordionItems.forEach(function (el) {
        el.classList.remove('active');
    });
    console.log(e);
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
    document.querySelector('.intro iframe').remove();
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
  new Glide('.slider', {
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
        slide = index;
        document.body.dataset.slide = index;
        document.body.dataset.old = oldIndex;
        changeActiveIcon(index);

        setTimeout(function () {
            isAnimated = false;
        }, 4000);
    }
};

function changeActiveIcon(index) {
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

function setSpeedChange() {
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
'use strict';

var tabsButtons = document.querySelectorAll('.tabs_button');
var tabsVideos = document.querySelectorAll('.tabs_video');

tabsButtons.forEach(function (button) {
    button.addEventListener('click', changeTab);
});

function changeTab(e) {
    var tabIndex = e.currentTarget.dataset.tab - 1;

    tabsButtons.forEach(function (el) {
        el.classList.remove('active');
    });
    tabsVideos.forEach(function (el) {
        el.classList.remove('active');
    });
    //tabsVideos.forEach(el => {el.stop()});

    tabsButtons[tabIndex].classList.add('active');
    tabsVideos[tabIndex].classList.add('active');
    //tabsVideos[tabIndex].play();
}