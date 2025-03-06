document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});

function goBack() {
    window.history.back();
}
