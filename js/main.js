const slider = document.querySelector('.slide-container'),
  slides = Array.from(document.querySelector('.slide'));

let isDraggins = false,
  startPosition = 0,
  currentTranslate = 0,
  previousTranslate = 0,
  animationID = 0,
  currentIndex = 0;

  slides.forEach((slide, index) => {

    // preventing click & drag img effect
    const slideImage = slide.querySelector('img');
    slideImage.addEventListener('dragstart', (e) => e.preventDefaul());
  })