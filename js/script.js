// Mobile Navigation Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {


menuToggle.addEventListener("click", () => {

    const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isExpanded));

    menuToggle.setAttribute(
        "aria-label",
        isExpanded ? "Open navigation menu" : "Close navigation menu"
    );

    navLinks.classList.toggle("active");

});

navLinks.addEventListener("click", (event) => {

    if (event.target.closest("a")) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && navLinks.classList.contains("active")) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.focus();

    }

});


}

// Automatically Update Footer Year

const currentYear = document.getElementById("current-year");

if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}

// Light and Dark Mode Toggle

const themeToggle = document.getElementById("theme-toggle");

// Apply the saved theme when the page loads
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");

    themeToggle?.setAttribute("aria-pressed", "true");
    themeToggle?.setAttribute("aria-label", "Switch to dark mode");

    if (themeToggle) {
        themeToggle.textContent = "🌙";
    }
}

// Change theme when the button is clicked
if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        const isLightMode =
            document.documentElement.getAttribute("data-theme") === "light";

        if (isLightMode) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("portfolio-theme", "dark");

            themeToggle.textContent = "☀️";
            themeToggle.setAttribute("aria-pressed", "false");
            themeToggle.setAttribute("aria-label", "Switch to light mode");

        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("portfolio-theme", "light");

            themeToggle.textContent = "🌙";
            themeToggle.setAttribute("aria-pressed", "true");
            themeToggle.setAttribute("aria-label", "Switch to dark mode");
        }

    });
}