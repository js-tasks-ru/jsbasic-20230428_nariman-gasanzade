// function hideSelf() {
//   const hideButton = document.querySelector('.hide-self-button');
//   hideButton.addEventListener('click', function() {hideButton.hidden = true;});
// };

// hideSelf();

function hideSelf() {
  const hideButton = document.querySelector('.hide-self-button');
  if (hideButton) {
    hideButton.addEventListener('click', function() {hideButton.hidden = true;});
  }
};

hideSelf();