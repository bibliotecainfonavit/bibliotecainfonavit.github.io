const nav = {};

nav.handleDropDown = () => {
  $('.dropDown').on('click', function (e) {
    e.stopPropagation();
    $(this).next().toggle();
    $('.nav__container__list--dropDown').not($(this).next()).hide();
  });
};

nav.handleClickOffnav = () => {
  $('html').click(function () {
    $('.nav__container__list--dropDown').hide();
  });
};


nav.handleHamburgerToggle = () => {
  $('nav ul').hide();
  $('#hamburgerToggle').on('click', function () {
    $('nav ul').toggle();
  });

  let x = false;
  $("#hamburgerToggle").on("click", function () {
    if (x) {
      $(this).removeClass("active");
      x = false;
    } else {
      $(this).addClass("active");
      x = true;
    }
  });
};

nav.init = () => {
  nav.handleClickOffnav();
  nav.handleDropDown();
  nav.handleHamburgerToggle();
};

//document ready
$(function () {
  nav.init();
});

$('nav ul').hide();
