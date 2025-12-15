document.addEventListener("DOMContentLoaded", () => {
    const cards = [...document.querySelectorAll(".car-card")];
    const showMoreBtn = document.getElementById("showMoreBtn");
    const showLessBtn = document.getElementById("showLessBtn");

    const MOBILE_LIMIT = 4; // показываем первые 4

    function updateDisplay() {
        if (window.innerWidth > 900) {
            // На ПК показываем всё
            cards.forEach(card => card.style.display = "block");
            showMoreBtn.classList.add("hidden");
            showLessBtn.classList.add("hidden");
            return;
        }

        // На телефонах скрываем всё после 4
        cards.forEach((card, i) => {
            card.style.display = i < MOBILE_LIMIT ? "block" : "none";
        });

        showMoreBtn.classList.remove("hidden");
        showLessBtn.classList.add("hidden");
    }

    updateDisplay();
    window.addEventListener("resize", updateDisplay);

    showMoreBtn.onclick = () => {
        cards.forEach(card => card.style.display = "block");
        showMoreBtn.classList.add("hidden");
        showLessBtn.classList.remove("hidden");
    };

    showLessBtn.onclick = () => {
        updateDisplay();
    };
});
