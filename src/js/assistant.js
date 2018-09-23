document.querySelector('.assistant_hover-area').addEventListener('mousemove', (e) => {
    let width = window.innerWidth / 2,
        x = e.clientX,
        angle = (x * 110/width) - 55;

    const wheel = document.querySelector('.assistant_wheel');
    const lights = document.querySelectorAll('.assistant_light');

    console.log(angle)
    if(angle <= 63 && angle >= -63) {
        wheel.style.transform = `rotate(${angle}deg)`;
        lights[0].style.transform = `rotate(${angle}deg)`;
        lights[1].style.transform = `rotate(${angle}deg)`;
    }
});

document.querySelector('.assistant').addEventListener('touchmove', (e) => {
    let width = window.innerWidth / 2,
        x = e.touches[0].clientX,
        angle = (x * 100/width) - 75;

    const wheel = document.querySelector('.assistant_wheel');
    const lights = document.querySelectorAll('.assistant_light');

    wheel.style.transform = `rotate(${angle/2}deg)`;
    lights[0].style.transform = `rotate(${angle/2}deg)`;
    lights[1].style.transform = `rotate(${angle/2}deg)`;
});
