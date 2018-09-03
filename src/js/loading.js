const loadingPercentElement = document.querySelector('.loading_percent-value');
let player = null;

function init() {
        
    const loadingInterval = setInterval(function () {
        let percent = parseInt(loadingPercentElement.innerHTML);
        if (percent < 100) {
            loadingPercentElement.innerHTML = ++percent;
        } else {
            document.body.classList.add('show-intro');
            clearInterval(loadingInterval);

            try {
                player.playVideo();
            } catch(err) {
                console.log(err)
            }

            document.querySelector('.intro_close').addEventListener('click', closeIntro);
            document.addEventListener('keyup', function (e) {
                if (e.keyCode == 27) {
                    closeIntro();
                }
            });
        }
    }, 20);

    const closeIntro = function closeIntro() {
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
              decimal: '.',
            };

    for(var i = 0; i < counters.length; i++) {
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

let done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED && !done) {
        player.stopVideo();
        closeIntro();
        done = true;
    }
}