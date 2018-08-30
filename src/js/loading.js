const loadingPercentElement = document.querySelector('.loading_percent-value');
let loadingInterval = setInterval(() => {
    let percent = parseInt(loadingPercentElement.innerHTML);
    if(percent < 100) {
        loadingPercentElement.innerHTML = ++percent;

        if(percent === 50) {
            document.querySelector('.intro iframe').src = 'https://www.youtube.com/embed/9BCdoCeS-Co?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;color=white';//'https://www.youtube.com/embed/YI_pVTIJuAo?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;color=white';
        }
    } else {
        document.body.classList.add('show-intro');
        clearInterval(loadingInterval);
        //document.body.classList.add('loaded');
        //setTimeout(()=> {
        //    setSpeedChange();
        //}, 2000);

        document.querySelector('.intro_close').addEventListener('click', closeIntro);
        document.addEventListener('keyup', (e) => {
            if(e.keyCode == 27) {
                closeIntro();
            }
        });
    }
}, 20);

let closeIntro = () => {
    document.querySelector('.intro iframe').remove();
    document.body.classList.add('loaded');
    window.addEventListener('wheel', function addScroll(e) {
        document.body.classList.add('scrolled');

        setTimeout(()=> {
            changeSlide(1)
            window.removeEventListener('wheel', addScroll);
            window.addEventListener('wheel', (e) => {
                if(e.deltaY > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            });
        }, 500);
    });

    setTimeout(()=> {
        setSpeedChange();
    }, 2000);

}
