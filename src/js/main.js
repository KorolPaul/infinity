window.addEventListener('load', () => {
  new Glide('.content_left .content_step__2  .slider', {
    type: 'slider',
    perView: 1
  }).mount();
  
  new Glide('.content_right .content_step__4  .slider', {
    type: 'slider',
    perView: 1
  }).mount();

  let slides = document.getElementsByClassName("glide_slides");
  for (var i=0; i<slides.length; i++){ slides[i].style.backfaceVisibility = "visible"; }
});
