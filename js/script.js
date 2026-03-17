const scrollBtn = document.getElementById("scrollTopBtn");
const darkModeToggle = document.getElementById("darkModeToggle");
const layoutToggle = document.getElementById("layoutToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* Scroll To Top */

if (scrollBtn) {
    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* Dark Mode */

if (darkModeToggle) {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";

    document.body.classList.toggle("dark-mode", isDark);
    darkModeToggle.checked = isDark;

    darkModeToggle.addEventListener("change", () => {
        const enabled = darkModeToggle.checked;
        document.body.classList.toggle("dark-mode", enabled);
        localStorage.setItem("theme", enabled ? "dark" : "light");
    });
}

/* RTL Layout */

if (layoutToggle) {
    const savedDirection = localStorage.getItem("direction") || "ltr";
    document.documentElement.setAttribute("dir", savedDirection);

    layoutToggle.addEventListener("click", () => {
        const currentDirection = document.documentElement.getAttribute("dir") || "ltr";
        const newDirection = currentDirection === "rtl" ? "ltr" : "rtl";

        document.documentElement.setAttribute("dir", newDirection);
        localStorage.setItem("direction", newDirection);
    });
}

/* Mobile Menu */

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

/* Active Nav Link */

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

/* Work Slider */

const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (sliderTrack && slides.length > 0 && nextBtn && prevBtn) {
    let currentIndex = 0;

    function getVisibleSlides() {
        if (window.innerWidth <= 500) return 1;
        if (window.innerWidth <= 768) return 2;
        return 3;
    }

    function updateSlider() {
        const slideGap = 30;
        const slideWidth = slides[0].offsetWidth + slideGap;
        const maxIndex = Math.max(0, slides.length - getVisibleSlides());

        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        slides.forEach((slide) => slide.classList.remove("active"));

        const activeIndex = currentIndex + Math.floor(getVisibleSlides() / 2);
        if (slides[activeIndex]) {
            slides[activeIndex].classList.add("active");
        }
    }

    nextBtn.addEventListener("click", () => {
        const maxIndex = Math.max(0, slides.length - getVisibleSlides());
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
}

/* Before After Slider */

const compareSlider = document.querySelector(".before-after-slider .slider");
const beforeWrapper = document.querySelector(".before-wrapper");

if (compareSlider && beforeWrapper) {
    beforeWrapper.style.width = `${compareSlider.value}%`;

    compareSlider.addEventListener("input", () => {
        beforeWrapper.style.width = `${compareSlider.value}%`;
    });
}

/* Reveal */

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .about, .work-section, .location, .choose-card, .gallery-item, .project-info-box, .all-service-card, .team-card, .mission-card, .info-card, .service-image, .service-text, .about-image, .about-text, .about-story-text, .about-story-image, .philosophy-text, .philosophy-image"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

function revealOnScroll() {
    revealElements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 90) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

