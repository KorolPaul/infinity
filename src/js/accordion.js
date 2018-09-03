const accordionItems = document.querySelectorAll('.accordion_item');

for(let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', changeAccordion);
}

function changeAccordion(e) {
    for(let i = 0; i < accordionItems.length; i++) {
        accordionItems[i].classList.remove('active');
    }
    e.currentTarget.classList.add('active');
}
