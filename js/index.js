// toggle button js
const $toggleBtn = document.querySelectorAll(".toggleSwitch");
const $wrap = document.querySelector(".wrap");
const $techIcons = document.querySelectorAll(".techIcons img");

$toggleBtn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    $wrap.classList.toggle("on");

    // techIcons
    $techIcons.forEach((icons) => {
      let alts = icons.getAttribute("alt");
      if ($wrap.classList.contains("on")) {
        icons.setAttribute("src", `./img/techIcons/${alts}Dark.png`);
      } else {
        icons.setAttribute("src", `./img/techIcons/${alts}Light.png`);
      }
      ``;
    });
  });
});
// techIcons
$techIcons.forEach((icons) => {
  icons.addEventListener("mouseover", () => {
    let alts = icons.getAttribute("alt");
    icons.setAttribute("src", `./img/techIcons/${alts}.png`);
  });
  icons.addEventListener("mouseout", () => {
    let alts = icons.getAttribute("alt");
    if ($wrap.classList.contains("on")) {
      icons.setAttribute("src", `./img/techIcons/${alts}Dark.png`);
    } else {
      icons.setAttribute("src", `./img/techIcons/${alts}Light.png`);
    }
  });
  icons.addEventListener("click", () => {
    $techIcons.forEach((icons) => {
      icons.classList.remove("on");
    });
    icons.classList.add("on");
  });
});
// ---------------------------------------------
// changeText js
const texts = [
  "효율적인 코드를 짜는",
  "오류를 해결하는",
  "문제에 다가서는",
  "팀원과 함께하는",
];
let index = 0;
const changeTextElement = document.querySelector(".changeText");

function changeText() {
  changeTextElement.textContent = texts[index];
  changeTextElement.classList.add("show");
  index = (index + 1) % texts.length;
  setTimeout(() => {
    changeTextElement.classList.remove("show");
  }, 1500);
}
setInterval(changeText, 2500);

// ham button
const $ham = document.querySelector(".ham");
$ham.addEventListener("click", () => {
  $ham.classList.toggle("on");
});

// scroll Down
const sections = document.querySelectorAll(".section");
const gotop = document.querySelector(".gotop");
const pgLinks = document.querySelectorAll(".gnb > a");

window.addEventListener("resize", () => {
  setTimeout(() => {
    location.reload();
  }, 1000);
});

if (window.innerWidth > 800) {
  sections.forEach((section) => {
    section.addEventListener("mousewheel", (e) => {
      e.preventDefault();
      const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
      const nextSection =
        delta < 0 ? section.nextElementSibling : section.previousElementSibling;
      if (nextSection) {
        const moveTop =
          window.pageYOffset + nextSection.getBoundingClientRect().top;
        window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
      }
    });
  });
}

gotop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

pgLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    const moveTop = section.offsetTop;
    window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
    pgLinks.forEach((a) => {
      a.classList.remove("on");
    });
    link.classList.add("on");
  });
});
