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
function autoCloseMenu(x) {
  if (x.matches) {
    // If media query matches
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
  }
}

var x = window.matchMedia("(min-width: 500px)");
autoCloseMenu(x); // Call listener function at run time
x.addListener(autoCloseMenu); // Attach listener function on state changes
