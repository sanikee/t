// id записи в бд 
let m = 0;

// добавить лайн -------------------------------------------------------------------------------

const addLine = function() {
  
  const lineId = "line-" + m;
  let lineToAdd = '';
  
  // берем инпуты
  let $inputText = document.getElementById('text');
  
  // если есть строчка для добавления
  if ($inputText.value) {  
    let $inputCheck = document.getElementById('check');
    
    //console.log($inputCheck.checked);
    if ($inputCheck.checked) {
      lineToAdd = `<div class="line ${lineId} check_record grabbable" draggable="true"><label><input type="checkbox"><b>${$inputText.value}</b></label></div>`;
    } else {
      lineToAdd = `<div class="line ${lineId} just_record grabbable" draggable="true"><b>${$inputText.value}</b></div>`;
    }
  
    // вставляем сбоку
    let $aside = document.querySelector('.section__records');  
    $aside.insertAdjacentHTML('beforeend', lineToAdd);
  
    let $colorCheck = document.getElementById('usecolor');    
    let $block = document.querySelector('.'+ lineId);
    if ($colorCheck.checked) {
      let $color = document.getElementById('color3');  
      $block.style.border = '3px solid transparent';
      $block.style.backgroundColor = $color.value;
      $block.style.color = toggleColor($color.value);
    } else {
      $block.style.backgroundColor = 'transparent';
      $block.style.border = '3px solid Tan';
      
    }
    m++;    
    
    //проверка на лапку кота
    if (isCatPawUp) { 
      toggleCatPaw();
    }
  
  }
  
    
  $inputText.value = '';
};


