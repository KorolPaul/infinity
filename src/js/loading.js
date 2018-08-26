const loadingPercentElement = document.querySelector('.loading_percent-value');
let loadingInterval = setInterval(() => {
    let percent = parseInt(loadingPercentElement.innerHTML);
    if(percent < 100) {
        loadingPercentElement.innerHTML = ++percent;
    } else {
        document.body.classList.add('show-intro');
        document.querySelector('.intro iframe').src = 'https://www.youtube.com/embed/NRFjsh_aOC8?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;color=white';
        clearInterval(loadingInterval);
        //document.body.classList.add('loaded');
        //setTimeout(()=> {
        //    setSpeedChange();
        //}, 2000);

        document.querySelector('.intro_close').addEventListener('click', () => {
            document.querySelector('.intro iframe').remove();
            document.body.classList.add('loaded');
            setTimeout(()=> {
                setSpeedChange();
            }, 2000);
        });
    }
}, 20);