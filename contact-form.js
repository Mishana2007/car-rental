// --- Выбор соцсети ---
const options = document.querySelectorAll(".social-option");
const socialBlock = document.getElementById("socialInputBlock");
const socialInput = document.getElementById("socialInput");
const socialLabel = document.getElementById("socialLabel");

options.forEach(opt => {
    opt.addEventListener("click", () => {

        options.forEach(o => o.classList.remove("active"));
        opt.classList.add("active");

        socialBlock.classList.remove("hidden");

        const type = opt.dataset.social;

        if (type === "tg") {
            socialLabel.innerText = "Ваш Telegram профиль:";
            socialInput.placeholder = "@username или ссылка";
        }

        if (type === "wa") {
            socialLabel.innerText = "Ваш WhatsApp:";
            socialInput.placeholder = "Ссылка или номер";
        }

        if (type === "vk") {
            socialLabel.innerText = "Ваш VK профиль:";
            socialInput.placeholder = "https://vk.com/username";
        }
    });
});

// --- FAQ ---
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        const answer = btn.nextElementSibling;

        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});
