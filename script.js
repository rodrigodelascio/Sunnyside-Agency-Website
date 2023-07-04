const hamburgerMenu = document.querySelector(".hamburger-links-container");
const hamburgerIcon = document.querySelector(".hamburger-menu-icon-wrapper");
const navLinks = document.querySelectorAll(".hamburger-nav-link");

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
  })
);
