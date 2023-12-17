
  $(document).ready(function(){
    // slider slick init
    $('.js-automated-section-slick-slider').slick({
      autoplay: false,
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      prevArrow: $('.js-intro-slider-control .slick-prev'),
      nextArrow: $('.js-intro-slider-control .slick-next'),
      appendDots: '.js-intro-slider-dots',
      customPaging: function(slider, i) {
        return '<span class="dot"></span>';
      }
    });
  });