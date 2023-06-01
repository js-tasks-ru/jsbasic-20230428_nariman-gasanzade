function initCarousel() {
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselInnerWidth = document.querySelector(".carousel__inner").offsetWidth;
  let countSlide = document.querySelectorAll('.carousel__slide').length;
  let activeIndex = 0;

  setArrow(activeIndex, arrowRight, arrowLeft, countSlide);

  arrowRight.addEventListener( "click", () => {
    activeIndex++;
    document.querySelector(".carousel__inner").style.transform = `translateX(-${activeIndex * carouselInnerWidth}px)`;
    setArrow(activeIndex, arrowRight, arrowLeft, countSlide);
  });

  arrowLeft.addEventListener( "click", () => {
    activeIndex--;
    document.querySelector(".carousel__inner").style.transform = `translateX(-${activeIndex * carouselInnerWidth}px)`;
    setArrow(activeIndex, arrowRight, arrowLeft, countSlide);
  });
};

function setArrow(activeIndex, arrowRight, arrowLeft, countSlide) {
  if (activeIndex === 0) {
    arrowLeft.style.display = 'none';
  } else {
    arrowLeft.style.display = '';
  }

  if (activeIndex >= countSlide -1) {
    arrowRight.style.display = 'none';
  } else {
    arrowRight.style.display = '';
  }
};