document.addEventListener("DOMContentLoaded", function () {
    // Navbar background change on scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "rgba(90, 24, 154, 0.9)";
            header.style.transition = "background 0.3s ease";
        } else {
            header.style.background = "linear-gradient(135deg, #5a189a, #9d4edd)";
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Animated text appearance effect
    const animatedText = document.querySelector(".animated-text");
    animatedText.style.opacity = "0";
    setTimeout(() => {
        animatedText.style.opacity = "1";
        animatedText.style.transition = "opacity 2s ease-in-out";
    }, 500);
});
