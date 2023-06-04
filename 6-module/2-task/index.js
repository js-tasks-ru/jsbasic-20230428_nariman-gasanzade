export default class ProductCard {
  constructor(product) {
    this.holder = document.getElementById('holder');
    this.product = product;
    this.elem = this.render();
    this.btn = this.elem.querySelector('.card__button');
  }

  render() {
    const { name, price, category, image, id } = this.product;
    
    const elem = document.createElement('div');
    elem.classList.add('card');
    
    elem.innerHTML = `
      <div class="card__top">
        <img src="/assets/images/products/${image}" class="card__image" alt="product">
        <span class="card__price">€${price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;
    
    elem.querySelector('.card__button').addEventListener('click', () => {
      const event = new CustomEvent('product-add', { 
        detail: id, 
        bubbles: true 
      });
      
      elem.dispatchEvent(event);
    });
    
    return elem;
  }
}
