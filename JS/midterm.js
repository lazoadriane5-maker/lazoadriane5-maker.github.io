// Select elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.button-prev');
const nextBtn = document.querySelector('.button-next');
const sliderContainer = document.querySelector('.slider-container');

// Create dots dynamically based on number of slides
let dotsContainer = document.querySelector('.slider-dots');
if (!dotsContainer) {
  dotsContainer = document.createElement('div');
  dotsContainer.className = 'slider-dots';
  sliderContainer.appendChild(dotsContainer);
}
dotsContainer.innerHTML = '';
slides.forEach((_, idx) => {
  const dot = document.createElement('span');
  dot.className = 'dot';
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('.dot');

let currentSlide = 0;

// Show slide by index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active-slide');
    slide.style.opacity = 0;
    dots[i].classList.remove('active-dot');
    if (i === index) {
      slide.classList.add('active-slide');
      setTimeout(() => { slide.style.opacity = 1; }, 10);
      dots[i].classList.add('active-dot');
    }
  });
  currentSlide = index;
}

// Next/Prev controls
function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}
function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => showSlide(idx));
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Initialize
showSlide(0);