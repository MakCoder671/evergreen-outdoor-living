// MOBILE NAVIGATION
// These selectors connect JavaScript to the menu button and its matching list.
const menuButton = document.querySelector(".menu-button");
const navigationMenu = document.querySelector("#navigation-menu");

// Open/close the menu by toggling Tailwind's `hidden` utility.
// aria-expanded keeps the visual state and screen-reader state in sync.
function toggleMobileMenu() {
  const menuIsOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!menuIsOpen));
  navigationMenu.classList.toggle("hidden");
}

// Run the toggle only when someone clicks the Menu button.
menuButton.addEventListener("click", toggleMobileMenu);

// One reusable reset keeps every "close menu" situation consistent.
function closeMobileMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigationMenu.classList.add("hidden");
}

// Tailwind switches to desktop navigation at 768px (`md`).
// Resetting here prevents an open mobile menu from staying open after resizing.
function handleWindowResize() {
  const desktopWidth = window.innerWidth >= 768;

  if (desktopWidth) {
    closeMobileMenu();
  }
}

// Escape is a familiar keyboard shortcut for closing menus and dialogs.
// Only handle it while the menu is open so other Escape behavior stays intact.
function handleEscapeKey(event) {
  const menuIsOpen = menuButton.getAttribute("aria-expanded") === "true";

  if (event.key === "Escape" && menuIsOpen) {
    // Firefox may apply its own Escape behavior after this handler runs.
    // Preventing the default stops it from overriding our focus change.
    event.preventDefault();

    closeMobileMenu();

    // Wait until the menu finishes closing, then return keyboard focus.
    requestAnimationFrame(function () {
      menuButton.focus();
    });
  }
}

// Listen for responsive changes and keyboard input after the page loads.
window.addEventListener("resize", handleWindowResize);
document.addEventListener("keydown", handleEscapeKey);
