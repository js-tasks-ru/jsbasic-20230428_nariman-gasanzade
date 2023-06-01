function toggleText() {
  const toggleText = () => {
    const text = document.getElementById('text');
    text.toggleAttribute('hidden');
  }
  
  document.querySelector('.toggle-text-button').addEventListener('click', toggleText);}