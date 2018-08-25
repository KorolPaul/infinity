'use strict';

var loadingPercentElement = document.querySelector('.loading_percent-value');
var loadingInterval = setInterval(function () {
    var percent = parseInt(loadingPercentElement.innerHTML);
    if (percent < 100) {
        loadingPercentElement.innerHTML = ++percent;
    } else {
        document.body.classList.add('loaded');
        clearInterval(loadingInterval);
    }
}, 20);
'use strict';

window.addEventListener('load', function () {});
'use strict';

var speedElement = document.querySelector('#speed');
var speed = 0;

document.querySelector('.js-light').addEventListener('mouseenter', function () {
    document.body.classList.remove('dark');
});

document.querySelector('.js-dark').addEventListener('mouseenter', function () {
    document.body.classList.add('dark');
});