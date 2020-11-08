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

$(function () {
  console.log("document loaded");
});

$(window).on("load", function () {
  console.log("window loaded");
});



// light dark
const theme = localStorage.getItem('theme');
if (theme === "dark") {
  document.documentElement.setAttribute('data-theme', 'dark');
}
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

if (theme === "dark") {
  document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
  document.getElementById("theme-toggle").innerHTML = "Dark Mode";
} else if (userPrefers === "dark") {
  document.documentElement.setAttribute('data-theme', 'dark');
  window.localStorage.setItem('theme', 'dark');
  document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  window.localStorage.setItem('theme', 'light');
  document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

function modeSwitcher() {
  let currentMode = document.documentElement.getAttribute('data-theme');
  if (currentMode === "dark") {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
  }
}