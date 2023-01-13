const slider = tns({
  container: '.carousel-slider .slider-list',
  controls: false,
  items: 2,
  navContainer: '.carousel-thumbnail .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,

  responsive: {
    640: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 6,
    }
  }
});