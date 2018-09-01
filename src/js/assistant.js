document.querySelector('.switcher_left').addEventListener('mousemove', (e) => {
    let width = window.innerWidth / 2,
        x = e.clientX,
        angle = (x * 100/width) - 50;

    const wheel = document.querySelector('.assistant_wheel');
    const lights = document.querySelectorAll('.assistant_light');
    console.log(angle)
    wheel.style.transform = `rotate(${angle/2}deg)`;
    lights[0].style.transform = `rotate(${angle/2}deg)`;
    lights[1].style.transform = `rotate(${angle/2}deg)`;
});