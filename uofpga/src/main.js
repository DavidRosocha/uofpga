document.addEventListener("DOMContentLoaded", function () {
    // Navbar background change on scroll
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
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

    // Fade in the H1 once per session
    const title = document.querySelector(".animated-text");
    if (!sessionStorage.getItem("heroFadeDone")) {
        title.classList.add("fade-in-once");
        sessionStorage.setItem("heroFadeDone", "true");
    } else {
        title.classList.remove("fade-in-once");
    }

    // Fade in the H2 and <p> once per session
    const subtitle = document.querySelector(".subtitle");
    const paragraph = document.querySelector(".text p");

    if (!sessionStorage.getItem("subtitleFadeDone")) {
        subtitle.classList.add("fade-in-once");
        paragraph.classList.add("fade-in-once");
        sessionStorage.setItem("subtitleFadeDone", "true");
    } else {
        subtitle.classList.remove("fade-in-once");
        paragraph.classList.remove("fade-in-once");
    }
});
