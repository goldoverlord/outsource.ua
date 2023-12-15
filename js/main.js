document.addEventListener('DOMContentLoaded', function () {
  var headerNavToggle = document.querySelector('.js-header-nav-toggle');
  headerNavToggle.addEventListener('click', function (event) {
    document.body.classList.toggle('is-menu-show');
  });

  var selectElement = document.getElementById('CurrencySelect');
  selectElement.addEventListener('change', function () {
    var selectedValue = this.value;
    var uaContent = document.getElementById('uaContent');
    var enContent = document.getElementById('enContent');

    if (selectedValue === 'ua') {
      uaContent.style.display = 'block';
      enContent.style.display = 'none';
    } else {
      uaContent.style.display = 'none';
      enContent.style.display = 'block';
    }
  });

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
});