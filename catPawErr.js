// КОТИК ДЕЛАЕТ ОЧИЩЕНИЕ -----------------------------------------------------------------------

// лапка вверх? сначала нет
let isCatPawUp = false;

// два кота - без лапки 1, с лапкой 2
const $cat1 = document.getElementById('cat-1');
const $cat2 = document.getElementById('cat-2');

$cat1.addEventListener("click", catErasesAll);

// стирает всё в <main></main>, надо добавить проверку: есть ли там что стирать?

function catErasesAll() {
  const $main = document.querySelector('main');      
  $main.innerHTML =`<aside class="section__records"></aside>\n<section class="section__boxes"></section>`;
  toggleCatPaw();  
}

// сменить положение лапы (сменить кота)

function toggleCatPaw () {
  $cat1.classList.toggle('hide');
  $cat2.classList.toggle('hide');
  isCatPawUp = !isCatPawUp;
}
