
/*
const boxes = document.querySelectorAll('.box');
const lines = document.querySelectorAll('.line');

let object = "";
let destiny = ""; 

/*
for (const box of boxes) {
  box.addEventListener('dragstart', dragStart);
  box.addEventListener('dragend', dragEnd);
}

for (const line of lines) {
  line.addEventListener('dragstart', lineDragStart);
  line.addEventListener('dragend', lineDragEnd);
}

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  console.log('Start');
  object = this.id;
}

function dragEnd() {
  //alert('Objeto: '+this.id);
  this.className = 'box';  
}

*/

new Sortable(section__boxes, {
    animation: 550,
   

});

new Sortable(section__records, {
    animation: 250,
    ghostClass: 'blue-background-class',
       
  onChoose: function (evt) {
      evt.item.classList.add('sortable-chosen'); // The selected item
     console.log(evt.item);
    },
  
   
});


