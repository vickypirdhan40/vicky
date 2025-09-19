let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  slides.style.transform = `translateX(${-slideIndex * 800}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  slideIndex++;
  showSlide(slideIndex);
});
document.querySelector('.prev').addEventListener('click', () => {
  slideIndex--;
  showSlide(slideIndex);
});

// Auto slide
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 4000);
