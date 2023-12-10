const nav = document.querySelector(".observ-nav");
const homeIntro = document.querySelector(".home-intro");

const obsCallBack = function (entries) {
  if (!entries[0].isIntersecting) {
    nav.classList.add("my-dark-nav");
  } else {
    nav.classList.remove("my-dark-nav");
  }
};
const cond = {
  root: null,
  threshold: 1,
};
const observer = new IntersectionObserver(obsCallBack, cond);

observer.observe(homeIntro);

const homeSec = document.getElementById("home");
const returnBtn = document.querySelector(".return-btn");

const returnBtnObserver = new IntersectionObserver(
  function (entries) {
    if (!entries[0].isIntersecting) {
      returnBtn.classList.add("active");
    } else if (entries[0].isIntersecting) {
      returnBtn.classList.remove("active");
    }
  },
  { root: null, threshold: 1 }
);

returnBtnObserver.observe(homeSec);
