const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("mobileOverlay");

burger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("active");
});
