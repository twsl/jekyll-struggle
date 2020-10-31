"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("hey");

  AOS.init({
    startEvent: "load",
  });

  feather.replace()
});

window.addEventListener("load", function (event) {
  // Your code to run since DOM is loaded and ready
  console.log("yey");
});
