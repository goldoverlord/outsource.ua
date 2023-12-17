
  $(document).ready(function(){
    $('.slider').slick({
      dots: false,
      appendDots: '.js-intro-slider-dots',
      customPaging: function(slider, i) {
        return '<span class="dot"></span>';
      }
    });
  });