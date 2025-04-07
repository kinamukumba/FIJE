//LOAD
const loader = document.querySelector('.loader');
if (loader) {
  window.onload = () => {
    setTimeout(() => {
      loader.classList.add('hidden')
    }, 5000)
  }
}