function setSpeedChange() {
    if(!IS_MOBILE) {
        for(let i = 0; i < document.querySelectorAll('.js-light').length; i++) {
            document.querySelectorAll('.js-light')[i].addEventListener('mouseenter', function () {
                document.body.classList.remove('dark');
                document.body.classList.add('light');
            });
        }
    
        for(let i = 0; i < document.querySelectorAll('.js-dark').length; i++) {
            document.querySelectorAll('.js-dark')[i].addEventListener('mouseenter', function () {
                document.body.classList.add('dark');
                document.body.classList.remove('light');
            });
        }
    } else {
        document.querySelector('.venom__mobile').addEventListener('click', function(e) {
            document.body.classList.toggle('dark');
            document.body.classList.toggle('light');
        });
    }
};
