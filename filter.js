document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cars = document.querySelectorAll(".car-card");

    filterBtns.forEach(btn => {
        btn.onclick = () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            cars.forEach(car => {
                const category = car.dataset.category;

                if (filter === "all" || filter === category) {
                    car.style.display = "block";
                } else {
                    car.style.display = "none";
                }
            });
        };
    });
});
