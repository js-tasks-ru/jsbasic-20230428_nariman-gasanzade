function initCarousel() {
  const inner = document.querySelector('.carousel__inner');
  const slides = document.querySelectorAll('.carousel__slide');
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const slideWidth = slides[0].offsetWidth;
  let currentSlideIndex = 0;

  function showSlide() {
    inner.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;

    if (currentSlideIndex === 0) {
      leftButton.style.display = 'none';
      rightButton.style.display = '';
    } else if (currentSlideIndex === slides.length - 1) {
      leftButton.style.display = '';
      rightButton.style.display = 'none';
    } else {
      leftButton.style.display = '';
      rightButton.style.display = '';
    }
  }

  function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      showSlide();
    }
  }

  function previousSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      showSlide();
    }
  }

  leftButton.style.display = 'none';
  rightButton.addEventListener('click', nextSlide);
  leftButton.addEventListener('click', previousSlide);// ваш код...
}

initCarousel();


