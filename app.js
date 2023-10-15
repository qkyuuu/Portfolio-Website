import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const moving = document.querySelectorAll(".unmove");
const slideIn = document.querySelector(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("move");
      slideIn.classList.add("go");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
moving.forEach((mover) => {
  appearOnScroll.observe(mover);
});
