"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("first");

  AOS.init({
    startEvent: "load",
  });

  theme();
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
  handleScroll();

});

function handleScroll() {
  // $(window).scroll(function () {
  //   if ($(document).scrollTop() > 50) {
  //     $('nav').addClass('transparent');
  //   } else {
  //     $('nav').removeClass('transparent');
  //   }
  // });
  window.onscroll = function () {
    let isScrolled = false
    const scrollPoint = 100
    const nav = $('#mainNav')
    const scroll = $('.scroll-top')

    function onScroll() {
      if (window.pageYOffset > scrollPoint && !isScrolled) {
        nav.removeClass('navbar-dark').addClass('navbar-light');
        scroll.addClass('scroll-top-visible');
        isScrolled = true
      } else if (window.pageYOffset <= scrollPoint && isScrolled) {
        nav.removeClass('navbar-light').addClass('navbar-dark');
        scroll.removeClass('scroll-top-visible');
        isScrolled = false
      }
    }

    onScroll()  // Makes sure that the class is attached on the first render
    return onScroll
  }()
}

function theme() {
  const darkSwitch = $('.theme-button');
  if (darkSwitch) {
    const darkThemeSelected = localStorage.getItem('darkSwitch') !== null && localStorage.getItem('darkSwitch') === 'dark';
    darkSwitch.checked = darkThemeSelected;
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
      document.body.removeAttribute('data-theme');

    $('.theme-button').on('click', function () {

      if (toggleFontawesomeIcon(darkSwitch, 'fas', 'far', 'moon', 'moon')) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkSwitch', 'dark');
      }
      else {
        document.body.removeAttribute('data-theme');
        localStorage.removeItem('darkSwitch');
      }
    });
  }
}

function toggleFontawesomeIcon(elem, styleOld, styleNew, iconOld, iconNew) {
  if (elem.find('svg').attr('data-icon') == iconOld
    && elem.find('svg').attr('data-prefix') == styleOld) {
    elem.find('svg').attr('data-icon', iconNew);
    elem.find('svg').attr('data-prefix', styleNew);
    return true;
  } else {
    elem.find('svg').attr('data-icon', iconOld);
    elem.find('svg').attr('data-prefix', styleOld);
    return false;
  };
}
