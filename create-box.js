  
// id записи в бд 
let n = 0; 

// добавить бокс -------------------------------------------------------------------------------

const addBox = function() {
  
  const boxId = "box-" + n;
  let elemContent = '';
  
  // берём инпуты
  let $inputText = document.getElementById('text');
  let $inputCheck = document.getElementById('check');
  
  // делаем часть того, что вставлять
  if ($inputCheck.checked  && $inputText.value) {
    // есть текстовый инпут c чекбоксом
    elemContent += `<div class="post__caption"><p><label><input type="checkbox">${$inputText.value}</b></label></p></div>`;        
  } else if ($inputText.value) {
      // есть текстовый инпут нет чекбокса
    elemContent += `<p class="post__heading"><b>${$inputText.value}</b></p>`; 
  } 
  
  // вставляем объект в секцию боксов
  let $main = document.querySelector('.section__boxes');
  
  $main.insertAdjacentHTML('beforeend', `<div class="box ${boxId} grabbable" draggable="true">
  <br><br>
  <div class="pictogram small-rotate">🖐</div>
  <span class="box__edit small-rotate" title="Изменить">✐</span>
  <span class="box__remove small-rotate title="Переработать">💀</span>${elemContent}</div>`);
  
  // помещаем картинку на фон
  let $block = document.querySelector('.'+ boxId);
 
  /* $block.style.backgroundImage = `url(${backs[n]})`; */
 
  $block.style.backgroundImage = `url('https://source.unsplash.com/random/${n}')`;
  
  
  n++;
  
  //проверка на лапку кота
  if (isCatPawUp) { 
    toggleCatPaw();
  }
  
  //очищаем поле ввода
  $inputText.value = '';
  
  //вешаем обработчик на кнопку удаления
  skullListener($block);
  
};

function skullListener(box) {
  box.querySelector('.box__remove').addEventListener('click', (evt) => evt.target.parentNode.remove() );
  /* позже сюда записать взаимодействие с БД - удаление в бд - отметка удалено, и чтоб мб восстановить */
}
