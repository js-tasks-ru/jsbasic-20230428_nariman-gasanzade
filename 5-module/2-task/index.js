function toggleText() {
  const text = document.querySelector('#text');
  const button = document.querySelector('.toggle-text-button');
  
  button.addEventListener('click', () => {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', '');
    }
  });// ваш код...
}

toggleText();