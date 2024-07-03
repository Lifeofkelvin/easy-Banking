const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".hamburger");
const overflow = document.querySelector(".overflow");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("close-menu");

  navLinks.classList.toggle("active");
  overflow.classList.toggle("active");
});
