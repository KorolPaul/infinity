const speedElement = document.querySelector('#speed');
let speed = 0;

document.querySelector('.js-light').addEventListener('mouseenter', () => {
    document.body.classList.remove('dark');
});

document.querySelector('.js-dark').addEventListener('mouseenter', () => {
    document.body.classList.add('dark');
});