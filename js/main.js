$(document).ready(function(){
  var slickSlider = $('.js-automated-section-slick-slider');

  slickSlider.slick({
    autoplay: false,
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.js-intro-slider-control .slick-prev'),
    nextArrow: $('.js-intro-slider-control .slick-next'),
    appendDots: '.js-intro-slider-dots',
    customPaging: function(slider, i) {
      return '<span class="dot"></span>';
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  if (slickSlider.slick('slickCurrentSlide') === 0) {
    updateDotsClass(0);
  }

  slickSlider.on('afterChange', function(event, slick, currentSlide){
    updateDotsClass(currentSlide);
  });

  function updateDotsClass(currentSlide) {
    $('.js-intro-slider-dots .dot').removeClass('slick-active');
    $('.js-intro-slider-dots .dot').slice(currentSlide, currentSlide + 3).addClass('slick-active');
  }
});