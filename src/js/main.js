window.addEventListener('load', () => {

  initSliders();

  let slides = document.getElementsByClassName("glide_slides");
  for (var i=0; i<slides.length; i++){ slides[i].style.backfaceVisibility = "visible"; }

  document.querySelector('.menu-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle('opened');
    document.querySelector('.menu').classList.toggle('opened');
  });
});

function initSliders() {
    console.log('sliders init')
    
    new Glide('.content_left .content_step__2  .slider', {
        type: 'slider',
        perView: 1
      }).mount();

    new Glide('.content_right .content_step__2  .slider', {
        type: 'slider',
        perView: 1
      }).mount();
    
    new Glide('.content_step__4  .slider', {
        type: 'slider',
        perView: 1
    }).mount();
}
