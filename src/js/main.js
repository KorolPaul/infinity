window.addEventListener('load', () => {
  new Glide('.content_left .content_step__2  .slider', {
    type: 'slider',
    perView: 1
  }).mount();
  
  new Glide('.content_right .content_step__4  .slider', {
    type: 'slider',
    perView: 1
  }).mount();
});
