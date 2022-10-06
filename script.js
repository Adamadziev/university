const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const navLink = document.getElementById("nav-link");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-active");
  closeBtn.classList.toggle("close-active");
  navLink.classList.toggle("nav-links-hidden");
});

closeBtn.addEventListener("click", () => {
  if (!burgerBtn.classList.value.includes("burger-active")) {
    burgerBtn.classList.toggle("burger-active");
    closeBtn.classList.toggle("close-active");
    navLink.classList.toggle("nav-links-hidden");
  }
});
