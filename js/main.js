const slider = document.querySelector('.slide-container'),
  slides = Array.from(document.querySelectorAll('.slide'));

let isDragging = false,
  startPosition = 0,
  currentTranslate = 0,
  previousTranslate = 0,
  animationID = 0,
  currentIndex = 0;

  slides.forEach((slide, index) => {

    // preventing click & drag img effect
    const slideImage = slide.querySelector('img');
    slideImage.addEventListener('dragstart', (e) => e.preventDefault());

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

  // Context manu disabled
  window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  function touchStart(index) {
    // we must return function with event object since we're calling it earlier with index parameter
    return function(event) {
      currentIndex = index;
      startPosition = getPositionX(event);
      isDragging = true;
    }
  }

  function touchEnd() {
    isDragging = false;
  }

  function touchMove() {
    if (isDragging) {
      console.log('move');
    }
  }

  function getPositionX(event) {
    return event.type.includes('mouse')
    ? event.pageX
    : event.touches[0].clientX;
  }