const track = document.querySelector(".gallery-track");
const images = document.querySelectorAll(".gallery img");

let index = 0;
const total = images.length;

function updateGallery() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").onclick = () => {
    index = (index + 1) % total;
    updateGallery();
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + total) % total;
    updateGallery();
};

// свайп
let startX = 0;
track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
track.addEventListener("touchend", e => {
    let diff = e.changedTouches[0].clientX - startX;
    if (diff < -40) index = (index + 1) % total;
    if (diff > 40) index = (index - 1 + total) % total;
    updateGallery();
});
