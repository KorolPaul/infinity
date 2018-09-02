const tabsButtons = document.querySelectorAll('.tabs_button');
const tabsVideos = document.querySelectorAll('.tabs_video');


tabsButtons.forEach((button) => {
    button.addEventListener('click', changeTab);
});

function changeTab(e) {
    let tabIndex = e.currentTarget.dataset.tab - 1;
    
    tabsButtons.forEach(el => {el.classList.remove('active')});
    tabsVideos.forEach(el => {el.classList.remove('active')});
    //tabsVideos.forEach(el => {el.stop()});

    tabsButtons[tabIndex].classList.add('active');
    tabsVideos[tabIndex].classList.add('active');
    //tabsVideos[tabIndex].play();
}