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

    // Touch events
    slide.addEventListener('touchstart', touchStart(index));
    slide.addEventListener('touchend', touchEnd);
    slide.addEventListener('touchmove', touchMove);

    // Mouse events
    slide.addEventListener('mousedown', touchStart(index));
    slide.addEventListener('mouseup', touchEnd);
    slide.addEventListener('mouseleave', touchEnd);
    slide.addEventListener('mousemove', touchMove);
  });

  function touchStart(index) {
    // we must return function with event object since we're calling it earlier with index parameter
    return function(event) {
      console.log('start');
    }
  }

  function touchEnd() {
    console.log('end');
  }

  function touchMove() {
    console.log('move');
  }