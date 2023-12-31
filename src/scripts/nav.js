/* Set styling on current (active) nav link */
document.querySelectorAll(".nav-item__link").forEach((link) => {
  // console.log(link.href, window.location.href);
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

/*------------------when mobile-menu-icon clicked, myNav width changes-----------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const openNavBtn = document.getElementById("openNavBtn");
  const closeNavBtn = document.getElementById("closeNavBtn");
  const myNav = document.getElementById("myNav");

  openNavBtn.addEventListener("click", function () {
    myNav.style.width = "100%";
  });

  closeNavBtn.addEventListener("click", function () {
    myNav.style.width = "0%";
  });
});

/*---------------------Scroll down - header becomes dark-grey and logo appears------------------ */
// Get a reference to the nav-container
document.addEventListener("DOMContentLoaded", () => {
  const outernavContainer = document.querySelector(".nav-outer-container");
  const logo = document.querySelector(".logo");
  const logoText = document.querySelector(".logo-text");

  // Listen for scroll events
  window.addEventListener("scroll", () => {
    // Check if the user has scrolled beyond a certain threshold (e.g., 50 pixels)
    if (window.scrollY > 50) {
      // Add the 'scrolled' class to apply the dark background
      outernavContainer.classList.add("scrolled");
      logo.classList.add("scrolled");
      logoText.classList.add("scrolled");
    } else {
      // Remove the 'scrolled' class to make the background transparent
      outernavContainer.classList.remove("scrolled");
      logo.classList.remove("scrolled");
      logoText.classList.remove("scrolled");
    }
  });
});

const navItemTexts = document.querySelectorAll(".nav-item-text");

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Check if the user has scrolled beyond a certain threshold (e.g., 50 pixels)
  const scrolled = window.scrollY > 50;

  // Use forEach to apply or remove the "scrolled" class for each element
  navItemTexts.forEach((navItemText) => {
    if (scrolled) {
      navItemText.classList.add("scrolled");
    } else {
      navItemText.classList.remove("scrolled");
    }
  });
});
