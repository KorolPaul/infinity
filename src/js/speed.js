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