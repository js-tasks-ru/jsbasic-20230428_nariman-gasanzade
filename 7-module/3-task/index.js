export default class StepSlider {
  constructor({ steps, value = 0 }) {
    // assign the steps and value properties to the instance
    this.steps = steps;
    this.value = value;
    
    // call the render method to build the slider DOM
    this.elem = this.render();

    // get the important elements for manipulation
    this.thumb = this.elem.querySelector('.slider__thumb');
    this.valueElem = this.thumb.querySelector('.slider__value');
    this.progress = this.elem.querySelector('.slider__progress');
    this.stepsElems = this.elem.querySelector('.slider__steps').querySelectorAll('span');

    // set the initial active step and thumb position
    this.setActiveStep(value);
    this.setThumbPosition(value);

    // attach the event listener to the slider
    this.elem.addEventListener('click', this.onClick.bind(this));
  }

  render() {
    let div = document.createElement('div');
    div.className = 'slider';

    div.innerHTML = `
      <div class="slider__thumb">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">
        ${'<span></span>'.repeat(this.steps)}
      </div>
    `;

    return div;
  }

  setActiveStep(value) {
    // remove active class from all steps
    this.stepsElems.forEach((elem) => elem.classList.remove('slider__step-active'));

    // add active class to the matching step
    this.stepsElems[value].classList.add('slider__step-active');
  }

  setThumbPosition(value) {
    // calculate the position based on steps and value
    let position = value / (this.steps - 1) * 100;

    // set the left position of the thumb element
    this.thumb.style.left = `${position}%`;

    // set the width of the progress bar
    this.progress.style.width = `${position}%`;

    // update the value displayed in the thumb element
    this.valueElem.textContent = value;
  }

  onClick(event) {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftPercents = left / this.elem.offsetWidth * 100;

    // calculate the new value based on the click position
    let value = Math.round(leftPercents / (100 / (this.steps - 1)));

    // update the active step and thumb position
    this.setActiveStep(value);
    this.setThumbPosition(value);

    // dispatch the custom event
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: value,
      bubbles: true
    }));
  }
}