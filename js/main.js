const portfolio = document.getElementById("portfolio");
const slider = document.querySelector(".portfolio-slider");
const sliderExit = document.querySelector(".slider-exit-btn");
const sliderOverlay = document.querySelector(".slider-overlay");
const mySliderImgs = document.querySelectorAll(".my-slider-img");

portfolio.addEventListener("click", function (e) {
  if (e.target.classList.contains("portfolio-img")) {
    slider.classList.add("active");
    let src = e.target.getAttribute("src");
    mySliderImgs.forEach((cur) => {
      if (cur.getAttribute("src") === src) {
        cur.parentElement.classList.add("active");
      }
    });
  }
});
sliderExit.addEventListener("click", () => {
  mySliderImgs.forEach((cur) => {
    cur.parentElement.classList.remove("active");
  });
  slider.classList.remove("active");
});
sliderOverlay.addEventListener("click", () => {
  mySliderImgs.forEach((cur) => {
    cur.parentElement.classList.remove("active");
  });
  slider.classList.remove("active");
});
/////
/////
/////
/////
/////
/////
/////

const counterElements = document.querySelectorAll(".counter-element");
const observing = document.querySelector(".counter-element");

let obtions = {
  root: null,
  threshold: 0.5,
};

const counterObserver = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting) {
    counterElements.forEach((cur) => {
      let startValue = 0;
      let endValue = Number(cur.getAttribute("end-val"));
      let duration = 4000 / endValue;

      let counter = setInterval(function () {
        startValue += 1;
        cur.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
}, obtions);

counterObserver.observe(observing);

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
