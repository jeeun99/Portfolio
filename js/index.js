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
