// Toggles the navigation menu
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".nav_overlay");

// Set initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    showMenu = true;
  } else {
    // Reset the menu state
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    showMenu = false;
  }
}

// Function will auto close the navigation menu if it is
// open and the size of the resolution changes
var x = window.matchMedia("(min-width: 501px)");
autoCloseMenu(x); // Call listener function at run time
x.addListener(autoCloseMenu); // Attach listener function on state changes

function autoCloseMenu(x) {
  if (x.matches) {
    // If media query matches
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
  }
}

const navName = document.querySelector(".nav_name");

// This funtion will add a sticky header when the user
// scrolls down.

$(function() {
  var mainNav = $("nav");
  var navName = $("nav_name");
  sticky = "sticky_header";
  show = "show";
  headerHeight = $("header").height();

  $(window).scroll(function() {
    if ($(this).scrollTop() > headerHeight) {
      mainNav.addClass(sticky);
      navName.addClass(show);
    } else {
      mainNav.removeClass(sticky);
      navName.removeClass(show);
    }
  });
});

// Automatically closes the navigation menu when the user
// clicks on a link
// const autoClose = document.querySelector(".auto-close");
function autoCloseNavOverlay() {
  // If media query matches
  menuBtn.classList.remove("close");
  menuNav.classList.remove("show");
  console.log("auto closing nav overlay");
}

// Contact Me Modal - Display/Hide
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("contact-me-button");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);
function openModal() {
  modal.style.display = "block";
}

closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", clickOutside);
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
