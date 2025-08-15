let ct = 0;
const slides = document.querySelectorAll(".slide");
const slidees = document.querySelectorAll(".slidee");
const dots = document.querySelectorAll(".dot");

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle("active", i === index);
//     dots[i].classList.toggle("active", i === index);
//   });
//   ct = index;
// }
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  slidees.forEach((slidee, i) => {
    slidee.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  ct = index;
}
function nextSlide() {
  if (ct < slides.length - 1) {
    ct++;
  } else {
    ct = 0;
  }
  showSlide(ct);
}
setInterval(nextSlide, 6000);

let ctt = 0;
const dotts = document.querySelectorAll(".dot-2");
const card = document.querySelectorAll(".card-item");
function showSlidee(index) {
  const cardsPerPage = 3;
  card.forEach((item, i) => {
    item.classList.toggle("active", i >= index && i < index + cardsPerPage);
  });
  dotts.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}
