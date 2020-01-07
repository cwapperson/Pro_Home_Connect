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
