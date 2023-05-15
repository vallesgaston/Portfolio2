const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".slider");

prev.addEventListener("click", () => {
  slider.scrollLeft -= 300;
});

next.addEventListener("click", () => {
  slider.scrollLeft += 300;
});

// const slider = document.querySelector(".slider");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const width = slider.offsetWidth;

// let position = 0;

// prevBtn.addEventListener("click", () => {
//   position += width;
//   slider.scrollTo({ left: position, behavior: "smooth" });
// });

// nextBtn.addEventListener("click", () => {
//   position -= width;
//   slider.scrollTo({ left: position, behavior: "smooth" });
// });
