$(document).ready(function() {
  // Slick Slider
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

  // Initial Dots Update
  if (slickSlider.slick('slickCurrentSlide') === 0) {
    updateDotsClass(0);
  }

  // After Change Event
  slickSlider.on('afterChange', function(event, slick, currentSlide){
    updateDotsClass(currentSlide);
  });

  // Function to Update Dots Class
  function updateDotsClass(currentSlide) {
    $('.js-intro-slider-dots .dot').removeClass('slick-active');
    $('.js-intro-slider-dots .dot').slice(currentSlide, currentSlide + 3).addClass('slick-active');
  }

  // Range Slider
    document.addEventListener("DOMContentLoaded", function() {
      const rangeInput = document.getElementById("myRange");

      rangeInput.addEventListener("input", function() {
        rangeInput.classList.toggle("input-active", isSliderThumbAtMax());
      });

      rangeInput.addEventListener("mousedown", function() {
        rangeInput.classList.add("input-active");
      });

      rangeInput.addEventListener("mouseup", function() {
        rangeInput.classList.remove("input-active");
      });

      function isSliderThumbAtMax() {
        const thumbPosition = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min);
        return thumbPosition === 1;
      }
    });
  // Scroll Event
  window.addEventListener("scroll", function() {
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    const scrollPosition = window.scrollY;
    const halfViewport = window.innerHeight / 2;

    const transitionDuration = 0.3;
    const updateImageOpacity = (element, opacity) => {
      element.style.opacity = opacity;
      element.style.transition = `opacity ${transitionDuration}s ease`;
    };

    if (scrollPosition > halfViewport) {
      updateImageOpacity(image1, 0);
      updateImageOpacity(image2, 1);
    } else {
      updateImageOpacity(image1, 1);
      updateImageOpacity(image2, 0);
    }
  });
});