"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("first");

  AOS.init({
    startEvent: "load",
  });
});

window.addEventListener("load", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("second");

  $('div').is('.page-loader') && $('.page-loader').delay(250).fadeOut(500)
});

$(function() {
  console.log( "document loaded" );
});

$( window ).on( "load", function() {
  console.log( "window loaded" );
});