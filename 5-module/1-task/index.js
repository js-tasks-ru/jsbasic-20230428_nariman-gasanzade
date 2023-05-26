function hideSelf() {
  const hideButton = document.querySelector('.hide-self-button');
  hideButton.addEventListener('click', function() {
    hideButton.hidden = true;
  });// ваш код...
}
hideSelf();