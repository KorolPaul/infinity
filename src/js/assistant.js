document.querySelector('.assistant').addEventListener('mousemove', (e) => {
    let width = window.innerWidth / 2,
        x = e.clientX,
        angle = (x * 100/width) - 50;

    const wheel = document.querySelector('.assistant_wheel');
    const lights = document.querySelectorAll('.assistant_light');

    wheel.style.transform = `rotate(${angle/2}deg)`;
    lights[0].style.transform = `rotate(${angle/2}deg)`;
    lights[1].style.transform = `rotate(${angle/2}deg)`;
});

document.querySelector('.assistant').addEventListener('touchmove', (e) => {
    let width = window.innerWidth / 2,
        x = e.clientX,
        angle = (x * 100/width) - 50;

    const wheel = document.querySelector('.assistant_wheel');
    const lights = document.querySelectorAll('.assistant_light');

    wheel.style.transform = `rotate(${angle/2}deg)`;
    lights[0].style.transform = `rotate(${angle/2}deg)`;
    lights[1].style.transform = `rotate(${angle/2}deg)`;
});
