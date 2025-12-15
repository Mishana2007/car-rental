console.log("%c🚗 Car Page JS Loaded", "color:#D4A373; font-size:16px;");

/* ============================================================
   1. MOBILE MENU
============================================================ */
const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-btn");

if (burger) {
    burger.addEventListener("click", () => {
        mobileMenu.classList.add("open");
    });
}

if (closeMenu) {
    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });
}

/* ============================================================
   2. GALLERY — SWIPE + DOTS
============================================================ */

const galleryWrapper = document.querySelector(".car-hero-gallery-wrapper");
const galleryImgs = document.querySelectorAll(".car-hero-gallery img");
const dots = document.querySelectorAll(".dot");

let current = 0;

// Обновление галереи
function updateGallery(index) {
    galleryImgs.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    galleryImgs[index].classList.add("active");
    dots[index].classList.add("active");
}

// Клик по кружочку
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        current = parseInt(dot.dataset.index);
        updateGallery(current);
    });
});

// Свайпы
let startX = 0;

if (galleryWrapper) {
    galleryWrapper.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    galleryWrapper.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        let diff = startX - endX;

        if (diff > 40) {
            current = (current + 1) % galleryImgs.length;
            updateGallery(current);
        }
        if (diff < -40) {
            current = (current - 1 + galleryImgs.length) % galleryImgs.length;
            updateGallery(current);
        }
    });
}

// Автосмена
setInterval(() => {
    current = (current + 1) % galleryImgs.length;
    updateGallery(current);
}, 6000);


/* ============================================================
   3. TABS — ОПИСАНИЕ / ХАРАКТЕРИСТИКИ
============================================================ */

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        tabContents.forEach(c => c.classList.remove("active"));
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

/* ============================================================
   4. FADE-UP ANIMATION (PREMIUM)
============================================================ */

const fadeBlocks = document.querySelectorAll(
    "section, .feature-card, .similar-card, .car-hero-left, .car-hero-gallery-wrapper"
);

fadeBlocks.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "all .6s ease-out";
});

function fadeOnScroll() {
    fadeBlocks.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
}

document.addEventListener("scroll", fadeOnScroll);
fadeOnScroll();

/* ============================================================
   5. OPTIONAL: Scroll to top
============================================================ */

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
