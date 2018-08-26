const setSpeedChange = () => {
    document.querySelector('.js-light').addEventListener('mouseenter', () => {
        if(document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }
    });

    document.querySelector('.js-dark').addEventListener('mouseenter', () => {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    });
};