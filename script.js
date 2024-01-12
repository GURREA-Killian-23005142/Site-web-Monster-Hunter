//commande permettans de changer le style des page 
let themeSelector = document.querySelector('#theme');

themeSelector.addEventListener('change', function() {

  let body = document.querySelector('body');

  body.classList.remove("simple-mode","dark-mode","light-mode","blue-mode", "pink-mode","green-mode");

  body.classList.add(`${this.value}-mode`);
});

