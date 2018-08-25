const loadingPercentElement = document.querySelector('.loading_percent-value');
let loadingInterval = setInterval(() => {
    let percent = parseInt(loadingPercentElement.innerHTML);
    if(percent < 100) {
        loadingPercentElement.innerHTML = ++percent;
    } else {
        document.body.classList.add('loaded');
        clearInterval(loadingInterval);
    }
}, 20);