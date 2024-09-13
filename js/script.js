/* typing animation */
var typed = new Typed(".typing", {
    strings: ["", "I work with", "WEB | Mobile | API | Scrum Master"],
    typeSpeed: 150,
    backSpeed: 200,
    loop: true
});

/* Aside */

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    const target = element.getAttribute("href").split("#")[1];
    for (let i = 0; i < totalNavList; i++) {
        const link = navList[i].querySelector("a");
        if (link.getAttribute("href").split("#")[1] === target) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    }
}

// Verifica se o botão "Hire Me" existe antes de adicionar o evento
const hireMeBtn = document.querySelector(".hire-me");
if (hireMeBtn) {
    hireMeBtn.addEventListener("click", function () {
        showSection(this);
        updateNav(this);
    });
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}
