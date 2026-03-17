const aboutStorySection = document.querySelector(".about-story");

window.addEventListener("scroll", () => {

if(!aboutStorySection) return;

const aboutTop = aboutStorySection.getBoundingClientRect().top;

if(aboutTop < window.innerHeight - 100){
aboutStorySection.classList.add("show");
}

});
const missionSection = document.querySelector(".mission");

window.addEventListener("scroll", ()=>{

const missionTop = missionSection.getBoundingClientRect().top;

if(missionTop < window.innerHeight - 100){
missionSection.classList.add("show");
}

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let start = 0;
const end = counter.innerText;

const updateCounter = () => {
start++;
counter.innerText = start;

if(start < end){
setTimeout(updateCounter,20);
}
}

updateCounter();

});
const cursor = document.querySelector(".custom-cursor");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});
const darkModeToggle = document.getElementById("darkModeToggle");

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


