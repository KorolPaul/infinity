const accordionItems = document.querySelectorAll('.accordion_item');

accordionItems.forEach(el => {
    el.addEventListener('click', changeAccordion);
});

function changeAccordion(e) {
    accordionItems.forEach(el => {el.classList.remove('active')});
    console.log(e)
    e.currentTarget.classList.add('active');
}