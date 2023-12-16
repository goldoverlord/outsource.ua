document.addEventListener('DOMContentLoaded', function () {
var headerNavToggle = document.querySelector('.js-header-nav-toggle');
headerNavToggle.addEventListener('click', function (event) {
    document.body.classList.toggle('is-menu-show');
});

  // Код для вибору мови
  var selectElement = document.getElementById('CurrencySelect');
  var uaContent = document.getElementById('uaContent');
  var enContent = document.getElementById('enContent');

  selectElement.addEventListener('change', function () {
    var selectedValue = this.value;
    uaContent.style.display = selectedValue === 'ua' ? 'block' : 'none';
    enContent.style.display = selectedValue === 'ua' ? 'none' : 'block';
  });

  // Код для пошуку
  var searchInput = document.getElementById('searchInput');
  var searchBtn = document.getElementById('searchBtn');
  var searchIcon = document.querySelector('.form-search__icon');

  searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (!searchInput.classList.contains('show')) {
      searchInput.classList.add('show');
    }
  });

  document.addEventListener('click', function (e) {
    if (
      !searchInput.contains(e.target) &&
      !searchBtn.contains(e.target) &&
      !searchIcon.contains(e.target)
    ) {
      if (searchInput.classList.contains('show')) {
        searchInput.classList.remove('show');
      }
    }
  });
  
  // Код для паралаксу
  var paralaxContainer = document.querySelector('.paralax');
  var paralaxImages = document.querySelectorAll('.paralax__bg-img');

  paralaxContainer.addEventListener('mousemove', function (e) {
    var rect = paralaxContainer.getBoundingClientRect();
    var offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    var offsetY = (e.clientY - rect.top) / rect.height - 0.5;

    paralaxImages.forEach(function (img, index) {
      var translateX = offsetX * (index + 1) * 20;
      var translateY = offsetY * (index + 1) * 20;

      img.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
    });
  });
});