import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.addEvents();
  }
  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    let innerElem = document.createElement('nav');
    innerElem.classList.add('ribbon__inner');
    for (let category of this.categories) {
      let categoryElem = document.createElement('a');
      categoryElem.classList.add('ribbon__item');
      categoryElem.setAttribute('data-id', category.id);
      categoryElem.textContent = category.name;
      innerElem.appendChild(categoryElem);
    }
    this.elem.appendChild(innerElem);
    this.elem.insertAdjacentHTML('beforeEnd', '<button class="ribbon__arrow ribbon__arrow_left"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></button><button class="ribbon__arrow ribbon__arrow_right"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></button>');
  }

  addEvents() {
    this.elem.querySelector('.ribbon__inner').addEventListener('click', (event) => this.onCategoryClick(event));
    this.elem.querySelector('.ribbon__arrow_left').addEventListener('click', () => this.onArrowClick('left'));
    this.elem.querySelector('.ribbon__arrow_right').addEventListener('click', () => this.onArrowClick('right'));
  }

  onCategoryClick(event) {
    event.preventDefault();
    let target = event.target;
    if (target.classList.contains('ribbon__item')) {
      this.select(target);
    }
  }

  onArrowClick(direction) {
    let innerElem = this.elem.querySelector('.ribbon__inner');
    if (direction === 'left') {
      innerElem.scrollBy(-350, 0);
    } else if (direction === 'right') {
      innerElem.scrollBy(350, 0);
    }
  }

  select(target) {
    let selectedElem = this.elem.querySelector('.ribbon__item_active');
    if (selectedElem) {
      selectedElem.classList.remove('ribbon__item_active');
    }
    target.classList.add('ribbon__item_active');
    this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
      detail: target.getAttribute('data-id'),
      bubbles: true
    }));
  }
}
