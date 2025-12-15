document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const images = carousel.dataset.images.split(",");
        let index = 0;

        // Создаем IMG-элементы
        images.forEach((src, i) => {
            const img = document.createElement("img");
            img.src = "placeholder.jpg"; // ЗАГЛУШКИ, заменишь на реальные файлы
            img.classList.add(i === 0 ? "active" : "");
            carousel.appendChild(img);
        });

        const imgs = carousel.querySelectorAll("img");

        // Создаем кнопки
        const prevBtn = document.createElement("div");
        prevBtn.className = "prev";
        prevBtn.innerHTML = "‹";

        const nextBtn = document.createElement("div");
        nextBtn.className = "next";
        nextBtn.innerHTML = "›";

        carousel.appendChild(prevBtn);
        carousel.appendChild(nextBtn);

        function showImage(i) {
            imgs.forEach(img => img.classList.remove("active"));
            imgs[i].classList.add("active");
        }

        nextBtn.addEventListener("click", () => {
            index = (index + 1) % images.length;
            showImage(index);
        });

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            showImage(index);
        });

        /* ==== SWIPE ==== */
        let startX = 0;

        carousel.addEventListener("touchstart", e => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener("touchend", e => {
            let endX = e.changedTouches[0].clientX;

            if (startX - endX > 50) {
                // swipe left
                index = (index + 1) % images.length;
                showImage(index);
            } else if (endX - startX > 50) {
                // swipe right
                index = (index - 1 + images.length) % images.length;
                showImage(index);
            }
        });
    });
});
