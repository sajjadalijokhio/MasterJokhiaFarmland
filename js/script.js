document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 1.2) {
            section.classList.add("animate");
        }
    });

    // Show or hide the Back to Top button
    const backToTop = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Ensure the page always starts at the top (Home section) on load
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo({
        top: 1,
        behavior: "smooth", // Optional: smooth scrolling to the top
    });
});
