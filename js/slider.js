$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slider-btn prev-btn"><img src="./img/left-arrow.svg"></button>',
    nextArrow:
      '<button type="button" class="slider-btn next-btn"><img src="./img/right-arrow.svg"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  /*Присваиваем классы кнопкам*/
  // $('.slider').slick({
  //       prevArrow: '<button type="button" class="slider-btn prev-btn"><img src="./img/left-arrow.svg"></button>',
  //       nextArrow: '<button type="button" class="slider-btn next-btn"><img src="./img/right-arrow.svg"></button>'
  // });
});
