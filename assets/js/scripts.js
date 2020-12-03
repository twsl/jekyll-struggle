"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("first");

  AOS.init({
    startEvent: "load",
  });
});

$(window).on("load", function () {
  console.log("window loaded");
});

window.addEventListener("load", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("second");

  $('div').is('.page-loader') && $('.page-loader').delay(250).fadeOut(500)
});

$(function () {
  console.log("document loaded");

  theme();

});

function theme() {
  const darkSwitch = $('.theme-button');
  if (darkSwitch) {
    const darkThemeSelected =
      localStorage.getItem('darkSwitch') !== null &&
      localStorage.getItem('darkSwitch') === 'dark';
    darkSwitch.checked = darkThemeSelected;
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
      document.body.removeAttribute('data-theme');

    $('.theme-button').on('click', function () {
      if ($(this).find('svg').attr('data-icon') == 'moon' && $(this).find('svg').attr('data-prefix') == 'fas') {
        $(this).find('svg').attr('data-icon', 'moon');
        $(this).find('svg').attr('data-prefix', 'far');

        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkSwitch', 'dark');
      } else {
        $(this).find('svg').attr('data-icon', 'moon');
        $(this).find('svg').attr('data-prefix', 'fas');

        document.body.removeAttribute('data-theme');
        localStorage.removeItem('darkSwitch');
      };
      resetTheme();
    });
  }
}
