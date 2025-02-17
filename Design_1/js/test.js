// OUR SKILLS SECTION
let section = document.querySelector(".our-skills");

let skill = document.querySelectorAll(".our-skills .the-progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    skill.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
};

// LATEST EVENT SECTION
let countDownDate = new Date("Dec 31, 2025 23:59:59 ").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let timeDeff = countDownDate - dateNow;

  let days = Math.floor(timeDeff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDeff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDeff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (timeDeff == 0) {
    clearInterval(counter);
  }
}, 1000);

// stats SECTION
let nums = document.querySelectorAll(".stats .number");
let stats = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
