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
}, 0);

var closeIntro = function closeIntro() {
    document.querySelector('.intro iframe').remove();
    document.body.classList.add('loaded');
    window.addEventListener('wheel', function (e) {
        document.body.classList.add('scrolled');
    });

    setTimeout(function () {
        setSpeedChange();
    }, 2000);
};
'use strict';

window.addEventListener('load', function () {});
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