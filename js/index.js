// toggle button js
const $toggleBtn = document.querySelector(".toggleSwitch");
const $wrap = document.querySelector(".wrap");

$toggleBtn.addEventListener("click", () => {
  $toggleBtn.classList.toggle("active");
  $wrap.classList.toggle("on");
});

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
