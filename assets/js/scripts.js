"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("first");

  AOS.init({
    startEvent: "load",
  });

  feather.replace()
});

window.addEventListener("load", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("second");

  $('div').is('.page-loader') && $('.page-loader').delay(500).fadeOut(800)
});
