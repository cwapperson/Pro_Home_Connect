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

// This funtion will add a sticky header when the user
// scrolls down.
$(function() {
  var mainNav = $("nav");
  sticky = "sticky_header";
  headerHeight = $("header").height();

  $(window).scroll(function() {
    if ($(this).scrollTop() > headerHeight) {
      mainNav.addClass(sticky);
    } else {
      mainNav.removeClass(sticky);
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

// // Contact me Show/Hide
// const contactBtn = document.querySelector(".contact-me-button");
// const modalBg = document.querySelector(".modal_bg");

// // Set initial state of the contact me section
// let showContact = false;

// contactBtn.addEventListener("click", toggleContact);

// function toggleContact() {
//   if (!showContact) {
//     modalBg.classList.add("show");
//     showMenu = true;
//     console.log("contact show");
//   } else {
//     // Reset the contact me state
//     modalBg.classList.remove("show");
//     showContact = false;
//     console.log("contact hide");
//   }
// }
