const tabsButtons = document.querySelectorAll('.tabs_button');
const tabsContent = document.querySelectorAll('.tabs_content');

for(let i = 0; i < tabsButtons.length; i++) {
    tabsButtons[i].addEventListener('click', changeTab);
}

function changeTab(e) {
    let tabIndex = e.currentTarget.dataset.tab - 1;

    for(let i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].classList.remove('active');
    }
    for(let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('active');
    }

    tabsButtons[tabIndex].classList.add('active');
    tabsContent[tabIndex].classList.add('active');
}
