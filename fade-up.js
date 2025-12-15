const fadeElements = document.querySelectorAll('.fade-up');

function onScrollFade() {
    fadeElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

document.addEventListener('scroll', onScrollFade);
onScrollFade();
