

// (+/-) шапка с чаем ---------------------------------------------------------------------------

function toToggleHeader() {
  let $header = document.querySelector('.header');
  $header.classList.toggle('hide');
}

// (+/-) радужное меню --------------------------------------------------------------------------

function toToggleMenuColor() {
  let $topmenu = document.querySelector('.topmenu');
  $topmenu.classList.toggle('rainbow_gradient');
}

// задать цвет топменю -------------------------------------------------------------------------

function toChangeMenuColor(color) {
  let block = document.querySelector('.topmenu');
  block.style.backgroundColor = event.target.value; 
  block.style.color = toggleColor(event.target.value);
}

// цвет основного фона -------------------------------------------------------------------------

let $colorPicker = document.getElementById('color');
$colorPicker.addEventListener("change", watchColorPicker);

function watchColorPicker(event) {
  let block = document.querySelector('body');
  block.style.backgroundColor = event.target.value;
}
