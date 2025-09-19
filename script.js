let index = 0;
const slides = document.querySelectorAll(".slides img");

function showSlide(n) {
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === n);
  });
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

showSlide(index);
