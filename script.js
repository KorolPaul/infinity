'use strict';

window.addEventListener('load', function () {
    document.body.classList.add('init');
});
'use strict';

var speedElement = document.querySelector('#speed');
var speed = 0,
    hasStarted = false;

window.addEventListener('wheel', function (e) {
    e.preventDefault();

    if (e.deltaY > 0) {
        speed++;
    } else if (speed > 0) {
        speed--;
    }
    speedElement.innerHTML = speed;

    var slowSpeedClass = 'slow-speed',
        fastSpeedClass = 'fast-speed',
        zeroSpeedClass = 'freeze',
        initClass = 'init';

    if (speed > 0) {
        document.body.classList.add(slowSpeedClass);
        document.body.classList.remove(zeroSpeedClass);
        document.body.classList.remove(initClass);

        if (!hasStarted) {
            hasStarted = true;
            document.body.classList.add('start-moving');
        }
    } else {
        document.body.classList.remove(slowSpeedClass);
        document.body.classList.add(zeroSpeedClass);
    }

    if (speed > 40) {
        document.body.classList.add(fastSpeedClass);
    } else {
        document.body.classList.remove(fastSpeedClass);
    }
});