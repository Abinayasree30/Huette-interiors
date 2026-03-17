const scrollBtn = document.getElementById("scrollTopBtn");
const darkModeToggle = document.getElementById("darkModeToggle");
const rtlToggle = document.getElementById("rtlToggle");

/* ================= SCROLL TO TOP ================= */

if (scrollBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* ================= DARK MODE ================= */

if (darkModeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

/* ================= RTL TOGGLE ================= */

const layoutToggle = document.getElementById("layoutToggle");

if (layoutToggle) {
    const savedDirection = localStorage.getItem("direction") || "ltr";
    document.documentElement.setAttribute("dir", savedDirection);

    layoutToggle.addEventListener("click", () => {
        const currentDir = document.documentElement.getAttribute("dir") || "ltr";
        const newDir = currentDir === "rtl" ? "ltr" : "rtl";

        document.documentElement.setAttribute("dir", newDir);
        localStorage.setItem("direction", newDir);
    });
}



/* ================= WORK SLIDER ================= */

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

/* ================= BEFORE / AFTER SLIDER ================= */

const compareSlider = document.querySelector(".before-after-slider .slider");
const beforeWrapper = document.querySelector(".before-wrapper");

if (compareSlider && beforeWrapper) {
    compareSlider.addEventListener("input", () => {
        beforeWrapper.style.width = `${compareSlider.value}%`;
    });
}

/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .about, .work-section, .location, .choose-card, .gallery-item, .project-info-box"
);

function revealOnScroll() {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
